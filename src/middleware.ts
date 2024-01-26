import { guestRoute, stackMiddlewares, userRoute } from "./middlewares";

const middlewares = [guestRoute, userRoute];
export default stackMiddlewares(middlewares);

