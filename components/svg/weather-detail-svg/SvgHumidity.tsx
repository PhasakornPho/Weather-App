import React from "react";

type Props = {
	className?: string;
};

const SvgHumidity = (props: Props) => {
	return (
		<svg
			viewBox='0 0 400 400'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={`${props.className}`}
		>
			<path d='M195.184 32.8299C193.121 33.3927 191.7 34.1967 190.307 35.5903C187.627 38.2703 177.416 57.5931 173.342 67.6699C172.083 70.7519 170.368 76.1119 169.885 78.4703C168.331 86.1351 170.582 95.5419 175.513 101.974C183.687 112.64 197.221 116.205 208.879 110.737C211.961 109.29 213.864 107.977 216.356 105.619C222.413 99.8299 225.656 92.2723 225.736 83.6159C225.763 80.6411 225.656 79.8907 224.852 76.7819C223.458 71.2879 220.805 64.6147 216.785 56.5211C214.775 52.4475 211.559 46.3639 210.407 44.4879C210.112 43.9787 209.764 43.3623 209.656 43.1479C209.576 42.9335 208.772 41.4863 207.888 39.9319C205.422 35.6171 203.305 33.6875 200.035 32.8299C198.132 32.3475 197.034 32.3475 195.184 32.8299ZM199.07 47.3555C200.839 50.4107 203.546 55.4491 205.368 59.0939C207.7 63.7839 209.576 67.6967 209.576 67.9111C209.576 67.9915 209.871 68.6883 210.219 69.4655C211.666 72.5743 212.738 75.5223 213.757 79.0599C216.624 89.2171 210.058 99.9907 199.901 101.786C197.677 102.188 197.302 102.161 195.158 101.759C189.369 100.661 184.813 96.9087 182.454 91.3343C179.882 85.2775 180.016 82.2223 183.258 73.5659C185.617 67.3215 191.888 54.5379 196.605 46.4443C197.382 45.1311 197.891 45.3187 199.07 47.3555Z' />
			<path d='M116.044 66.0351C114.007 66.4639 111.917 67.6699 110.55 69.1975C109.907 69.9211 107.977 72.7351 106.235 75.5223C104.493 78.2827 102.537 81.4183 101.867 82.4903C97.1501 89.9675 80.9361 116.66 80.9361 116.928C80.9361 117.009 80.1321 118.429 79.1673 120.091C76.8357 124.084 68.8493 138.449 66.9465 142.04C66.1157 143.594 65.1777 145.336 64.8561 145.926C62.3369 150.401 53.9217 167.232 51.0541 173.53C43.0409 191.137 38.2705 204.082 35.7513 215.07C34.7865 219.385 34.5185 220.671 34.1433 223.512C33.3929 228.791 33.7413 239.19 34.8669 244.711C36.5017 252.992 37.5469 256.717 39.8517 262.64C48.9637 286.036 68.7957 304.903 92.3797 312.649C100.875 315.436 109.451 316.776 118.697 316.776C131.615 316.749 143.514 313.989 155.038 308.307C179.775 296.167 197.034 272.958 201.885 245.354C203.225 237.823 203.493 228.202 202.528 222.038C200.598 209.335 194.515 192.022 184.518 170.716C178.837 158.629 163.025 128.64 158.763 121.886C158.415 121.323 158.12 120.814 158.12 120.761C158.12 120.707 157.021 118.804 155.681 116.526C154.341 114.275 153.001 111.997 152.733 111.488C152.439 110.979 151.983 110.175 151.688 109.746C151.42 109.29 151.018 108.647 150.831 108.272C150.482 107.682 147.079 102.001 146.06 100.366C145.846 99.9907 144.452 97.7395 143.005 95.3543C138.69 88.2255 129.712 73.9411 127.783 71.0467C125.88 68.2327 123.387 66.4639 120.493 65.9547C118.563 65.6063 117.947 65.6063 116.044 66.0351ZM120.815 81.1771C122.851 84.3395 123.253 84.9827 126.871 90.7179C129.31 94.6039 136.68 106.664 137.055 107.334C137.216 107.629 137.913 108.781 138.583 109.88C140.352 112.801 145.042 120.761 148.204 126.281C149.142 127.943 150.053 129.524 150.214 129.765C150.536 130.275 152.519 133.812 153.511 135.608C153.886 136.278 155.253 138.717 156.566 141.021C157.852 143.353 158.924 145.283 158.924 145.336C158.924 145.39 159.514 146.515 160.211 147.829C163.266 153.457 164.15 155.145 167.581 162.006C170.984 168.786 175.808 178.675 175.808 178.89C175.808 178.943 176.291 180.042 176.88 181.329C177.497 182.615 178.461 184.813 179.051 186.206C179.667 187.6 180.23 188.94 180.364 189.181C180.873 190.146 184.223 198.561 184.652 199.928C184.786 200.303 185.322 201.804 185.858 203.278C188.619 210.916 190.361 217.348 191.352 223.753C192.933 234.017 190.87 248.087 186.073 259.692C184.947 262.399 182.24 267.785 181.302 269.179C180.927 269.715 180.632 270.224 180.632 270.305C180.632 270.465 177.818 274.566 176.371 276.442C170.689 283.946 163.266 290.592 155.44 295.175C153.752 296.167 152.171 297.078 151.956 297.212C149.223 298.847 142.549 301.473 137.484 302.92C136.68 303.135 135.34 303.51 134.509 303.751C133.679 303.992 132.714 304.18 132.365 304.18C132.017 304.18 130.945 304.341 129.98 304.555C122.932 306.109 110.55 305.734 102.51 303.724C96.5069 302.25 89.0833 299.543 85.9477 297.694C85.2509 297.292 84.6077 296.944 84.5273 296.944C84.1789 296.944 78.7385 293.567 76.5409 292.013C68.4741 286.251 61.3721 278.613 56.1461 270.144C54.5113 267.464 51.0005 260.549 50.3305 258.566C50.0893 257.923 49.5265 256.315 49.0709 255.002C46.5785 247.9 45.0509 238.788 45.0241 230.989C45.0241 224.45 46.3105 217.75 49.5801 207.566C51.3221 202.099 55.0473 192.343 56.8429 188.404C57.1645 187.761 57.5129 186.957 57.6201 186.662C57.9685 185.724 61.6133 177.657 62.8997 175.004C64.5613 171.493 73.9681 152.679 74.2361 152.358C74.3433 152.197 75.2009 150.643 76.1121 148.874C79.9981 141.504 89.1905 125.129 91.5757 121.35C91.8973 120.787 92.1921 120.278 92.1921 120.225C92.1921 119.957 108.192 93.5319 110.711 89.5923C111.22 88.8419 112.48 86.8587 113.498 85.2239C118.001 78.1219 118.081 77.9879 118.483 77.9879C118.617 77.9879 119.662 79.4351 120.815 81.1771Z' />
			<path d='M83.4823 187.332C81.2043 187.895 78.9531 188.886 77.2647 190.039C69.2247 195.559 63.7843 208.665 62.3103 226.192C61.5063 235.438 62.0155 242.674 63.9183 249.374C64.1863 250.258 64.5347 251.518 64.7223 252.188C65.1779 253.823 67.4023 258.941 68.4207 260.764C71.6635 266.579 76.4875 271.752 81.0703 274.298C84.1523 276.013 89.2711 277.38 92.7283 277.38C96.2391 277.38 100.768 276.174 103.931 274.405C109.291 271.377 113.873 264.65 115.857 256.878C116.875 252.858 117.089 251.947 117.384 250.178C117.92 246.855 118.456 239.565 118.456 235.304C118.456 229.649 117.652 222.949 116.446 218.366C116.205 217.509 115.857 216.169 115.669 215.418C113.123 205.797 107.173 196.149 100.929 191.432C95.7567 187.573 88.9227 185.965 83.4823 187.332ZM91.3347 198.909C95.9443 200.625 100.607 206.762 103.663 215.07C106.825 223.699 107.736 232.731 106.637 244.416C105.914 252.134 104.199 257.843 101.492 261.461C99.3747 264.328 97.2843 265.507 93.8807 265.749C89.5391 266.097 86.4035 264.837 82.9195 261.434C80.5611 259.102 79.3819 257.467 77.6131 253.849C74.1559 246.881 72.7891 238.949 73.4055 229.542C74.2899 216.41 77.2111 206.253 81.4723 201.482C84.4203 198.186 87.3415 197.409 91.3347 198.909Z' />
			<path d='M262.774 87.877C259.96 88.6274 258.004 90.1818 255.913 93.2906C251.089 100.473 247.042 106.771 242.165 114.784C240.369 117.705 238.708 120.412 238.466 120.814C238.198 121.216 237.904 121.725 237.823 121.94C237.716 122.154 237.475 122.529 237.314 122.744C236.966 123.146 233.08 130.033 231.15 133.598C230.587 134.616 229.864 135.956 229.542 136.546C228.658 138.1 224.262 146.891 223.11 149.41C220.644 154.77 217.75 162.033 216.946 164.954C216.732 165.677 216.303 167.125 216.008 168.17C213.65 176.29 214.213 184.839 217.696 194.166C222.896 208.102 234.795 219.251 249.508 223.967C262.747 228.202 278.291 226.728 290.378 220.055C292.468 218.929 296.14 216.624 296.408 216.303C296.488 216.195 297.319 215.499 298.284 214.748C300.428 213.06 304.743 208.665 306.351 206.494C312.81 197.918 316.24 187.975 316.24 177.845C316.24 171.788 314.525 165.275 310.21 154.904C308.575 150.964 303.805 141.155 301.152 136.278C299.142 132.553 298.096 130.677 297.239 129.229C296.783 128.452 296.408 127.755 296.408 127.702C296.408 127.541 285.688 109.746 284.696 108.272C284.268 107.602 282.66 105.109 281.105 102.724C274.164 91.897 273.574 91.0394 271.94 89.8334C269.715 88.2254 268.67 87.8502 265.99 87.743C264.677 87.6894 263.23 87.743 262.774 87.877ZM266.606 101.25C271.028 107.521 281.882 124.995 287.028 134.134C295.256 148.767 300.776 160.478 303.135 168.304C303.403 169.269 303.751 170.394 303.912 170.85C305.225 175.057 305.306 180.015 304.126 184.92C303.966 185.59 303.751 186.555 303.644 187.064C302.947 190.039 299.972 196.069 297.641 199.124C295.363 202.179 291.155 206.145 288.127 208.182C281.212 212.819 274.11 214.909 265.374 214.936C256.101 214.936 248.007 212.256 240.798 206.789C236.725 203.707 232.946 199.392 230.561 195.157C227.747 190.119 225.924 183.419 225.924 178.059C225.924 168.625 233.857 150.562 249.294 124.888C257.146 111.809 264.811 99.9638 265.374 99.9638C265.561 99.9638 266.124 100.553 266.606 101.25Z' />
		</svg>
	);
};

export default SvgHumidity;