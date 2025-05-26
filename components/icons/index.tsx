import React from 'react';

// Cursor IDE Logo
export const CursorIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 24 
}) => (
  <svg 
    height={size} 
    width={size}
    className={className}
    style={{ flex: "none", lineHeight: "1" }} 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Cursor</title>
    <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#cursor-fill-0)"></path>
    <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#cursor-fill-1)"></path>
    <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#cursor-fill-2)"></path>
    <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path>
    <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000"></path>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-fill-0" x1="11.925" x2="11.925" y1="12" y2="24">
        <stop offset=".16" stopColor="#000" stopOpacity=".39"></stop>
        <stop offset=".658" stopColor="#000" stopOpacity=".8"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
        <stop offset=".182" stopColor="#000" stopOpacity=".31"></stop>
        <stop offset=".715" stopColor="#000" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-fill-2" x1="11.925" x2="1.5" y1="0" y2="18">
        <stop stopColor="#000" stopOpacity=".6"></stop>
        <stop offset=".667" stopColor="#000" stopOpacity=".22"></stop>
      </linearGradient>
    </defs>
  </svg>
);

// Windsurf Logo
export const WindsurfIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 24 
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size}
    className={className}
    fill="none" 
    viewBox="0 0 166 263"
  >
    <g filter="url(#windsurf-a)">
      <path fill="#58E5BB" d="M42.086 128.474 28.427 90.089c-2.383-6.696 2.436-13.802 9.291-13.48 76.537 3.589 115.804 31.534 112.144 112.12-13.311-56.28-77.153-60.255-107.776-60.255Z"/>
    </g>
    <g filter="url(#windsurf-b)">
      <path fill="#58E5BB" d="M21.453 57.833 7.236 20.639C4.662 13.908 9.478 6.6 16.44 6.683c78.163.938 132.738 6.243 132.738 110.722-13.311-56.28-97.101-59.572-127.725-59.572Z"/>
    </g>
    <g filter="url(#windsurf-c)">
      <path fill="#58E5BB" d="m63.245 201.377-14.653-41.075c-2.376-6.661 2.376-13.751 9.196-13.388 62.444 3.327 93.677 30.587 90.06 110.239-13.311-56.28-53.76-55.776-84.604-55.776Z"/>
    </g>
    <defs>
      <filter id="windsurf-a" width="122.286" height="116.131" x="27.81" y="76.598" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="shape" result="effect1_innerShadow_15473_4390"/>
      </filter>
      <filter id="windsurf-b" width="142.645" height="114.724" x="6.533" y="6.682" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="shape" result="effect1_innerShadow_15473_4390"/>
      </filter>
      <filter id="windsurf-c" width="100.158" height="114.252" x="47.972" y="146.9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="shape" result="effect1_innerShadow_15473_4390"/>
      </filter>
    </defs>
  </svg>
);

// V0.dev Logo
export const V0Icon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 24 
}) => (
  <svg 
    height={size} 
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    strokeLinejoin="round" 
    viewBox="0 0 16 16"
  >
    <path 
      clipRule="evenodd" 
      d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z" 
      fill="currentColor" 
      fillRule="evenodd"
    />
  </svg>
);

// Lovable Logo (simplified heart shape)
export const LovableIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 24 
}) => (
  <svg 
    width={size} 
    height={size}
    className={className}
    viewBox="0 0 256 256" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M128 227.734c-2.56 0-5.138-.463-7.734-1.388-2.595-.924-4.852-2.346-6.772-4.266L94.8256 204.906C69.6523 181.652 47.5552 159.199 28.5344 137.546 9.51147 115.892 0 92.8704 0 68.48 0 48.9963 6.54187 32.7115 19.6256 19.6256 32.7115 6.54187 48.9248 0 68.2656 0 79.2885 0 90.0267 2.54187 100.48 7.62561 110.933 12.7115 120.107 20.6229 128 31.36 136.604 20.6229 145.919 12.7115 155.946 7.62561 165.972 2.54187 176.569 0 187.734 0 207.075 0 223.289 6.54187 236.374 19.6256 249.458 32.7115 256 48.9963 256 68.48c0 24.3904-9.493 47.43-28.48 69.12-18.987 21.69-41.138 44.161-66.454 67.414l-18.56 17.066c-1.92 1.92-4.177 3.342-6.772 4.266-2.596.925-5.174 1.388-7.734 1.388z" 
      fill="#ff1814"
    />
  </svg>
);

// Tool Icons Collection
export const ToolIcons = {
  cursor: CursorIcon,
  windsurf: WindsurfIcon,
  v0: V0Icon,
  lovable: LovableIcon,
} as const;

// Tool Names
export const ToolNames = {
  cursor: 'Cursor',
  windsurf: 'Windsurf',
  v0: 'V0.dev',
  lovable: 'Lovable',
} as const;

// Combined Tool Info
export const Tools = [
  { 
    id: 'cursor', 
    name: 'Cursor', 
    icon: CursorIcon,
    description: 'AI-powered code editor',
    color: '#000000'
  },
  { 
    id: 'windsurf', 
    name: 'Windsurf', 
    icon: WindsurfIcon,
    description: 'AI development environment',
    color: '#58E5BB'
  },
  { 
    id: 'v0', 
    name: 'V0.dev', 
    icon: V0Icon,
    description: 'AI UI component generator',
    color: '#000000'
  },
  { 
    id: 'lovable', 
    name: 'Lovable', 
    icon: LovableIcon,
    description: 'AI app development platform',
    color: '#ff1814'
  },
] as const;

export type ToolId = typeof Tools[number]['id']; 