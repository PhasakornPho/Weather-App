import React from "react";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

type Props = {};

const AqiPage = (props: Props) => {
	return <div>AQI Page</div>;
};

export default AqiPage;
