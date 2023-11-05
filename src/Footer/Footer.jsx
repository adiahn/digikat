import React from 'react';
const Footer =() => {
    return(
<div className="w-full h-[547px] bg-slate-950 mt-16 px-4">
    <div className="relative max-w-md mx-auto top-8 w-full">
      <input type="email" className="w-full pr-16 pl-2 py-2 border rounded-r-md border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500" placeholder="Subscribe for our Newsletter"/>
      <button type="submit" className="absolute top-0 right-0 h-full px-4 py-2 bg-indigo-950 text-white rounded-r-md">
        Subscribe
      </button>
    </div>
</div>
    )
}
export default Footer;