import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export function RoutesWithNotFound({ children }: Props) {
	return (
		<Routes>
			{children}
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}
export default RoutesWithNotFound;
