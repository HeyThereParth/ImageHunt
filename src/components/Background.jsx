export const Background = ({ children }) => {
  return (
    //Header background
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex items-center py-10"> 
      <div className="max-w-md mx-auto w-full">
        {children}
      </div>
    </div>
  );
};
