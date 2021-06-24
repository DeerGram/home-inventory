import * as React from "react";
import { createPortal } from "react-dom";
import { useMounted, usePortal } from "@casper124578/useful/hooks";
import styles from "./modal.module.scss";
import { ModalIds } from "@t/ModalIds";
import { closeModal } from "@lib/modal";
import { CloseIcon } from "@components/icons/Close";
import { classes } from "@utils/classes";

export interface ModalProps {
  id: ModalIds;
  title: string;
  width?: string;
  [key: string]: unknown;
}

export const Modal: React.FC<ModalProps> = ({ id, title, children, ...rest }) => {
  const portalRef = usePortal(`Modal_Portal_${id}`);
  const isMounted = useMounted();

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal(id);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [id]);

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.id === id) {
      closeModal(id);
    }
  };

  return isMounted
    ? createPortal(
        <div
          {...rest}
          className={classes(styles.modalContainer, "modal")}
          onClick={handleOuterClick}
          id={id}
        >
          <div
            style={{ width: rest.width ?? "600px" }}
            className={styles.modalContent}
            id={`style-${id}`}
          >
            <div>
              <header className={styles.modalHeader}>
                {title}

                <button onClick={() => closeModal(id)} className={styles.closeModal}>
                  <CloseIcon />
                </button>
              </header>
              <div className={styles.modalBody}>{children}</div>
            </div>
          </div>
        </div>,
        portalRef!,
      )
    : null;
};
