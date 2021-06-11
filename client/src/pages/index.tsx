import * as React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Link from "next/link";

import { checkAuth } from "@actions/auth";
import { State } from "@t/State";
import { initializeStore } from "src/store/store";
import { Layout } from "@components/Layout";
import { User } from "@t/User";
import { getHouses } from "@actions/houses";
import { House } from "@t/House";
import styles from "css/houses.module.scss";

interface Props {
  isAuth: boolean;
  loading: boolean;
  user: User | null;
  houses: House[];
}

const IndexPage = ({ isAuth, loading, user, houses }: Props) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !isAuth) {
      router.push("/auth");
    }
  }, [isAuth, loading, router]);

  return (
    <Layout>
      <Head>
        <title>Home - Inventory</title>
      </Head>

      <div style={{ marginTop: "1rem" }}>
        <p>
          <em>
            Logged in as <strong>{user?.email}</strong>
          </em>
        </p>
      </div>

      <div className={styles.housesGrid}>
        {houses.map((house) => (
          <Link href={`/${house.id}`} key={house.id}>
            <a className={styles.housesItem}>
              <h1>{house.name}</h1>

              <p>
                <strong>Users:</strong> {house.users?.length}
              </p>
              <p>
                <strong>Products:</strong> {house.products?.length}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const store = initializeStore();
  const cookie = ctx.req.headers.cookie;

  await checkAuth(cookie)(store.dispatch);
  await getHouses(cookie)(store.dispatch);

  return { props: { initialReduxState: store.getState() } };
};

const mapToProps = (state: State): Props => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
  user: state.auth.user,
  houses: state.houses.houses,
});

export default connect(mapToProps)(IndexPage);
