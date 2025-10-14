
export default function Card({ name, icon, color }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full  p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center gap-3">
        <i className={`fa-brands text-3xl mb-2 ${color} ${icon}`}></i>
        <p className='text-center'>{name}</p>
    </div>
  );
}
