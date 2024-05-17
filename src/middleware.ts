import { stackMiddlewares } from "@/middlewares/stackHandler";
import { withoutToken } from "@/middlewares/withoutToken";
import { withToken } from '@/middlewares/withToken'

const middlewares = [withoutToken, withToken];
export default stackMiddlewares(middlewares);