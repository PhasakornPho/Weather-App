import React from "react";

type Props = {
    className?: string;
};

const SvgRain = (props: Props) => {
    return (
        <svg
            viewBox='0 0 400 400'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`${props.className}`}
        >
            <path d='M140.916 45.9618C137.826 46.3102 136.859 46.471 132.453 47.3554C124.688 48.9098 115.204 52.6082 108.004 56.8962C84.7106 70.7786 69.907 94.711 67.9995 121.511C67.8383 123.923 67.6234 125.37 67.3816 125.585C67.1935 125.772 66.0114 126.174 64.7486 126.496C57.3872 128.372 50.2138 131.963 43.6583 137.082C41.2134 138.985 36.1894 144.05 34.3624 146.462C29.016 153.43 25.3352 161.416 23.5352 169.778C22.3262 175.486 22.0575 183.607 22.9172 189.074C23.9382 195.533 25.4158 200.276 28.21 205.958C33.7982 217.375 42.9866 226.513 54.405 231.981C59.9126 234.607 64.4531 236.027 70.7936 237.099C73.6146 237.555 78.1282 237.582 178.26 237.582C278.822 237.582 282.906 237.555 285.996 237.073C289.999 236.456 295.184 235.223 297.602 234.339C298.596 233.964 299.671 233.589 299.966 233.508C300.262 233.428 302.331 232.49 304.534 231.418C317.107 225.334 326.914 215.686 333.227 203.144C335.672 198.293 337.015 194.514 338.198 189.127C339.353 183.982 339.729 180.551 339.729 175.272C339.729 165.597 337.607 156.619 333.281 147.936C326.779 134.831 315.092 123.816 301.82 118.295C297.495 116.499 295.883 115.937 292.712 115.186C291.262 114.838 290.697 114.275 290.697 113.123C290.697 111.917 289.811 106.825 289.22 104.573C287.446 97.659 283.766 90.7714 278.903 85.1434C276.162 82.0078 274.604 80.5338 271.219 77.961C265.443 73.5926 258.511 70.5106 251.203 69.0366C241.934 67.1874 230.516 68.3934 222.322 72.065C219.742 73.2174 218.802 73.6998 216.895 74.8254C215.686 75.5222 214.53 76.1118 214.342 76.1118C214.127 76.1118 212.515 74.5306 210.769 72.601C198.115 58.6918 182.21 49.955 163.484 46.6318C157.492 45.5866 147.337 45.265 140.916 45.9618ZM156.471 57.0838C159.83 57.459 163.752 58.1022 165.391 58.5846C166.143 58.799 166.923 58.9598 167.138 58.9598C167.352 58.9598 168.964 59.4154 170.738 60.005C179.55 62.8458 185.864 66.1422 193.547 71.9042C195.751 73.5926 202.333 79.9442 203.999 82.0078C204.536 82.6778 206.363 84.9558 208.082 87.0998C209.802 89.2438 211.414 91.093 211.709 91.227C212.112 91.4146 212.945 90.959 215.793 89.0294C225.465 82.4366 229.737 80.6142 237.636 79.6762C244.89 78.8454 252.735 80.3194 259.21 83.7498C266.679 87.7162 272.455 93.773 276.055 101.465C278.285 106.208 279.252 110.711 279.682 118.295C279.816 121.082 280.085 123.494 280.219 123.682C280.488 124.003 282.181 124.513 285.19 125.156C292.041 126.683 295.157 127.675 299.429 129.712C307.65 133.598 315.227 140.217 320.063 147.695C325.543 156.19 328.364 165.731 328.364 175.754C328.338 189.583 322.749 202.474 312.513 212.283C304.883 219.572 296.554 223.699 285.055 225.843C282.637 226.299 276.754 226.326 181.081 226.406C113.646 226.46 78.4506 226.379 76.0326 226.192C61.3366 225.093 49.3809 218.045 40.891 205.502C40.4074 204.805 40.0313 204.189 40.0313 204.109C40.0313 204.028 39.682 203.385 39.279 202.688C37.7745 200.142 36.1356 195.854 34.9266 191.405C34.2818 188.94 33.8251 184.893 33.8251 181.382C33.7982 174.387 35.1416 168.384 38.1775 161.899C42.6642 152.358 49.9451 145.041 59.644 140.378C63.459 138.529 66.1726 137.698 72.5937 136.385C76.6774 135.527 78.1551 135.125 78.5312 134.723C78.9342 134.268 78.988 133.625 78.988 130.007C78.988 125.772 79.579 117.545 80.0358 115.454C80.1701 114.811 80.4925 113.337 80.7343 112.158C82.7224 102.992 87.1286 93.3174 92.7437 85.7062C100.75 74.8254 112.195 66.1154 124.5 61.5058C130.626 59.201 136.268 57.8342 142.662 57.1106C145.564 56.789 153.624 56.7622 156.471 57.0838Z' />
            <path d='M71.5998 266.258C69.5311 267.062 68.9669 267.919 64.0503 277.728C59.6979 286.411 59.3755 287.162 59.3755 288.529C59.3755 292.388 63.0025 295.068 66.6026 293.862C67.4086 293.594 68.3758 293.031 68.8863 292.495C69.4236 291.932 71.4655 288.207 74.3134 282.552L78.8538 273.494V271.591C78.8538 269.983 78.7464 269.554 78.1284 268.589C76.7045 266.472 73.8029 265.427 71.5998 266.258Z' />
            <path d='M139.572 266.285C137.504 267.035 136.94 267.893 132.023 277.755C127.778 286.224 127.348 287.215 127.348 288.475C127.375 292.334 130.841 294.961 134.548 293.862C135.381 293.594 136.295 293.085 136.832 292.549C137.369 292.013 139.331 288.421 142.044 282.981C144.435 278.211 146.531 273.923 146.692 273.494C147.794 270.626 145.994 267.062 142.958 266.151C141.641 265.775 140.916 265.802 139.572 266.285Z' />
            <path d='M207.545 266.285C205.503 267.035 204.912 267.92 200.103 277.487C195.213 287.216 194.864 288.207 195.589 290.378C195.778 290.941 196.449 291.906 197.067 292.549C197.981 293.433 198.518 293.728 199.7 293.996C200.506 294.157 201.527 294.21 201.93 294.103C203.139 293.835 204.858 292.763 205.423 291.932C205.691 291.53 207.948 287.162 210.42 282.258C214.772 273.682 214.933 273.28 214.933 271.725C214.933 269.796 214.289 268.402 212.918 267.25C211.253 265.91 209.48 265.588 207.545 266.285Z' />
            <path d='M275.679 266.231C273.529 267.008 273.046 267.705 268.129 277.46C262.89 287.886 262.702 288.448 263.857 290.887C264.878 293.058 267.538 294.532 269.714 294.13C271.192 293.862 272.911 292.736 273.664 291.557C274.953 289.52 282.637 273.923 282.933 272.717C283.577 270.171 281.858 267.196 279.171 266.258C277.801 265.776 276.941 265.776 275.679 266.231Z' />
            <path d='M52.2558 305.761C50.1871 306.27 49.1124 307.476 46.99 311.684C45.5929 314.471 45.2705 315.302 45.2168 316.642C45.1362 318.035 45.2168 318.437 45.9153 319.617C47.8228 322.886 52.5245 323.342 54.9425 320.501C55.3455 319.992 56.5008 317.982 57.468 315.999C58.8382 313.158 59.2143 312.139 59.2143 311.175C59.1875 309.299 57.8173 307.047 56.1515 306.19C55.2649 305.734 53.2499 305.52 52.2558 305.761Z' />
            <path d='M120.228 305.761C118.159 306.27 117.085 307.476 114.962 311.684C112.598 316.374 112.544 318.223 114.667 320.581C116.413 322.511 118.885 322.94 121.33 321.734C122.888 320.957 123.775 319.724 125.736 315.57C126.918 313.131 127.079 312.541 127.079 311.067C127.079 309.593 126.972 309.191 126.273 308.253C124.822 306.217 122.404 305.225 120.228 305.761Z' />
            <path d='M188.147 305.788C187.099 306.029 185.622 307.101 184.923 308.119C184.628 308.548 183.66 310.397 182.747 312.247C180.866 316.052 180.678 317.312 181.619 319.134C183.607 322.94 188.228 323.529 191.022 320.367C191.506 319.804 192.634 317.875 193.521 316.052C195.455 312.086 195.643 310.799 194.488 308.602C193.386 306.431 190.592 305.198 188.147 305.788Z' />
            <path d='M256.254 305.788C255.018 306.002 253.514 307.128 252.735 308.414C251.606 310.237 249.403 315.034 249.215 316.025C248.651 319.215 251.391 322.377 254.723 322.404C257.571 322.404 259.102 320.957 261.52 315.999C262.944 313.077 263.159 312.434 263.132 311.148C263.132 309.54 262.675 308.441 261.52 307.289C260.15 305.922 258.35 305.413 256.254 305.788Z' />
        </svg>
    );
};

export default SvgRain;