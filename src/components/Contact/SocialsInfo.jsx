import React from "react";

export default function SocialsInfo() {
  return (
    <div>
        <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
            <p>
                <i className="fas fa-envelope text-sky-500 me-2"></i> m.nasser.dev@gmail.com
            </p>
            <p>
                <i className="fas fa-phone text-sky-500 me-2"></i> +20 155 265 3781
            </p>
            <div className="flex gap-4 mt-4">
                <a href="https://github.com/DevMohamedNasser" className="" target="_blank" >
                    <i className="fab fa-github text-2xl text-gray-800 dark:text-gray-200"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohamed-nasser-3bb5772a5/" className="" target="_blank" >
                    <i className="fab fa-linkedin text-2xl text-blue-600 dark:text-blue-400"></i>
                </a>
                <a href="mailto:m.nasser.dev@gmail.com" className="" target="_blank" >
                    <i className="fas fa-envelope text-2xl dark:text-rose-400 text-rose-500"></i>
                </a>
                <a href="https://wa.me/201552653781" className="" target="_blank" >
                    <i className="fab fa-whatsapp text-2xl dark:text-green-400 text-green-600"></i>
                </a>
                <a href="tel:+201552653781" className="" target="_blank" >
                    <i className="fas fa-phone text-2xl dark:text-amber-400 text-amber-600"></i>
                </a>
            </div>
        </div>
      </div>
  );
}
