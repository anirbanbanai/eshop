function TabBGIcon({ bgColor }:any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="301"
        // height="104"
        className="h-full w-full rounded-none"
        fill="none"
        viewBox="0 0 301 104"
      >
        <defs>
          <filter
            id="filter_20_1_dd"
            width="300.302"
            height="104"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="1.333"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="out"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect_dropShadow_1"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect_dropShadow_1"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
        <g filter="url(#filter_20_1_dd)">
          <path
            fill={bgColor}
            fillOpacity="1"
            fillRule="evenodd"
            d="M197.9 4H24C12.95 4 4 12.95 4 24v56c0 11.04 8.95 20 20 20h272.3a19.993 19.993 0 01-15.4-7.27L265.42 74l-52.13-62.78C209.49 6.64 203.85 4 197.9 4z"
          ></path>
        </g>
      </svg>
    );
  }
  
  export default TabBGIcon;
  