import { Router } from "express";
import { usersRouter } from "./admin/users";
import { authRouter } from "./auth";
import { productsRouter } from "./products";
import { categoriesRouter } from "./admin/categories";
import { notFoundMiddleware } from "@lib/middlewares";

const router = Router();

router.use("/auth", authRouter);
router.use("/products", productsRouter);
router.use("/admin/users", usersRouter);
router.use("/admin/categories", categoriesRouter);

router.post("/", (_, res) => {
  return res.json({
    message: "Hello world",
  });
});

router.use(notFoundMiddleware);

export default router;
