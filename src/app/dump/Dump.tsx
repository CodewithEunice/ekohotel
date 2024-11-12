<div className="flex-col flex">
            <label className="text-secondary-200">Arrival Date</label>
            <input
              type="date"
              placeholder="Arrival Date"
              className="text-slate-800  px-1 w-[200px] border-none"
            />
          </div>

          <div className="flex-col flex">
            <label className="text-secondary-200">Departure Date</label>
            <input
              type="date"
              placeholder="Dept Date"
              className="text-slate-800 px-1 w-[200px] border-none"
            />
          </div>

          <div className="text-slate-700 flex-col flex uppercase">
            <h2 className="text-white"> ADULTS</h2>
            <label className="text-secondary-200">
              Choose Adults
              <IoIosArrowDown size={14} color="white" />
            </label>
            <select name="Choose Adults" className="uppercase px-1 w-[200px]">
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
            </select>
          </div>
          <div className="text-slate-700 flex-col flex uppercase">
            <h2 className="text-white">
              0 Child <IoIosArrowDown size={14} color="white" />
            </h2>
            <label className="text-secondary-200">CHILDREN</label>
            <select name="o Child" className="px-1 w-[200px]">
              <option value="1 Adult">1 CHILD</option>
              <option value="2 Adults">2 CHILDREN</option>
              <option value="3 Adults">3 CHILDREN</option>
            </select>
          </div>

          <div className=" flex items-center pt-7 md:pt-40 justify-center">
            <button
              className="p-3  font-bold
             cursor-pointer text-white hover:text-secondary-100
            bg-secondary-200 text-sm"
            >
              CHECK AVAILABILITY
            </button>
          </div>