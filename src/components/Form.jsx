'use client'

const FormComponent = () => {
  const years = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
    1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
  ]
  return (
    <div className="w-full max-w-xl">
      <form className="mb-4 grid grid-cols-12 w-[600px] gap-1 rounded bg-white px-8 pb-8 pt-6 shadow-md sm:gap-4">
        <div className="col-span-12">
          <p className="mt-2 text-sm text-neutral-600">
            Fill the form to get your{' '}
            <span className="text-orange-400">Free Quote</span>
          </p>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          {/* <label
            className="mb-2 block text-sm font-bold text-gray-700"
            for="username"
          >
            Username
          </label> */}
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="username"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="username"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="username"
            type="text"
            placeholder="Enter 10 digit Phone number"
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <select
            name="make"
            id="id_make"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            // style="border-color:#CCCCCC solid 1px !important; color:#495057;"
            required=""
            defaultValue=""
            data-gtm-form-interact-field-id="0"
          >
            <option disabled value="">- Select Make -</option>
            <option value="Acura">Acura</option>
            <option value="Alfa">Alfa</option>
            <option value="AMC">AMC</option>
            <option value="Aston">Aston</option>
            <option value="Audi">Audi</option>
            <option value="Austin">Austin</option>
            <option value="Bentley">Bentley</option>
            <option value="BMW">BMW</option>
            <option value="Buick">Buick</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Chevy">Chevy</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Daewoo">Daewoo</option>
            <option value="Daihatsu">Daihatsu</option>
            <option value="Datsun">Datsun</option>
            <option value="Dodge">Dodge</option>
            <option value="Eagle">Eagle</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="Geo">Geo</option>
            <option value="GMC">GMC</option>
            <option value="Honda">Honda</option>
            <option value="Hummer">Hummer</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Infiniti">Infiniti</option>
            <option value="International">International</option>
            <option value="Isuzu">Isuzu</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Kia">Kia</option>
            <option value="LandRover">LandRover</option>
            <option value="Lexus">Lexus</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Mercury">Mercury</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Oldsmobile">Oldsmobile</option>
            <option value="Peugot">Peugot</option>
            <option value="Plymouth">Plymouth</option>
            <option value="Pontiac">Pontiac</option>
            <option value="Porsche">Porsche</option>
            <option value="Saab">Saab</option>
            <option value="Saturn">Saturn</option>
            <option value="Scion">Scion</option>
            <option value="Sterling">Sterling</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagon">Volkswagon</option>
            <option value="Volvo">Volvo</option>
            <option value="Yugo">Yugo</option>
          </select>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="model"
            type="text"
            placeholder="Model"
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <select
            name="part"
            id="id_part"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            required=""
            defaultValue=""
          >
            <option disabled value="">- Select Part -</option>
            <option value="Engine Assembly">Engine Assembly</option>
            <option value="Transmission Assembly">Transmission Assembly</option>
            <option value="Transfercase Assembly">Transfercase Assembly</option>
            <option value="Axle Assembly">Axle Assembly</option>
            <option value="Steering Column">Steering Column</option>
            <option value="Drive Shaft">Drive Shaft</option>
            <option value="ABS Module">ABS Module</option>
            <option value="Air Bags">Air Bags</option>
            <option value="Instrument Cluster">Instrument Cluster</option>
            <option value="Fender">Fender</option>
            <option value="Hood">Hood</option>
            <option value="Doors">Doors</option>
            <option value="Door panels">Door panels</option>
            <option value="Trunk/Lid">Trunk/Lid</option>
            <option value="Mirrors">Mirrors</option>
            <option value="Seats">Seats</option>
            <option value="Intake manifold">Intake manifold</option>
            <option value="Bumper Assembly/ Bumper cover">
              Bumper Assembly/ Bumper cover
            </option>
            <option value="Trailer hitch">Trailer hitch</option>
            <option value="Grille">Grille</option>
            <option value="Wheels">Wheels</option>
            <option value="Axel assembly">Axel assembly</option>
            <option value="Tail lights">Tail lights</option>
            <option value="Headlights">Headlights</option>
            <option value="Struts">Struts</option>
          </select>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <select
            name="size"
            id="size"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            required=""
            defaultValue="Not Selected"
          >
            <option value="Not Selected">Select Engine Size</option>
            <option value="1.0 Liter">1.0 Liter</option>
            <option value="1.1 Liter">1.1 Liter</option>
            <option value="1.2 Liter">1.2 Liter</option>
            <option value="1.3 Liter">1.3 Liter</option>
            <option value="1.4 Liter">1.4 Liter</option>
            <option value="1.5 Liter">1.5 Liter</option>
            <option value="1.6 Liter">1.6 Liter</option>
            <option value="1.7 Liter">1.7 Liter</option>
            <option value="1.8 Liter">1.8 Liter</option>
            <option value="1.9 Liter">1.9 Liter</option>
            <option value="2.0 Liter">2.0 Liter</option>
            <option value="2.1 Liter">2.1 Liter</option>
            <option value="2.2 Liter">2.2 Liter</option>
            <option value="2.3 Liter">2.3 Liter</option>
            <option value="2.4 Liter">2.4 Liter</option>
            <option value="2.5 Liter">2.5 Liter</option>
            <option value="2.6 Liter">2.6 Liter</option>
            <option value="2.7 Liter">2.7 Liter</option>
            <option value="2.8 Liter">2.8 Liter</option>
            <option value="2.9 Liter">2.9 Liter</option>
            <option value="3.0 Liter">3.0 Liter</option>
            <option value="3.1 Liter">3.1 Liter</option>
            <option value="3.2 Liter">3.2 Liter</option>
            <option value="3.3 Liter">3.3 Liter</option>
            <option value="3.4 Liter">3.4 Liter</option>
            <option value="3.5 Liter">3.5 Liter</option>
            <option value="3.6 Liter">3.6 Liter</option>
            <option value="3.7 Liter">3.7 Liter</option>
            <option value="3.8 Liter">3.8 Liter</option>
            <option value="3.9 Liter">3.9 Liter</option>
            <option value="4.0 Liter">4.0 Liter</option>
            <option value="4.1 Liter">4.1 Liter</option>
            <option value="4.2 Liter">4.2 Liter</option>
            <option value="4.3 Liter">4.3 Liter</option>
            <option value="4.4 Liter">4.4 Liter</option>
            <option value="4.5 Liter">4.5 Liter</option>
            <option value="4.6 Liter">4.6 Liter</option>
            <option value="4.7 Liter">4.7 Liter</option>
            <option value="4.8 Liter">4.8 Liter</option>
            <option value="4.9 Liter">4.9 Liter</option>
            <option value="5.0 Liter">5.0 Liter</option>
            <option value="5.1 Liter">5.1 Liter</option>
            <option value="5.2 Liter">5.2 Liter</option>
            <option value="5.3 Liter">5.3 Liter</option>
            <option value="5.4 Liter">5.4 Liter</option>
            <option value="5.5 Liter">5.5 Liter</option>
            <option value="5.6 Liter">5.6 Liter</option>
            <option value="5.7 Liter">5.7 Liter</option>
            <option value="5.8 Liter">5.8 Liter</option>
            <option value="5.9 Liter">5.9 Liter</option>
            <option value="6.0 Liter">6.0 Liter</option>
            <option value="6.1 Liter">6.1 Liter</option>
            <option value="6.2 Liter">6.2 Liter</option>
            <option value="6.3 Liter">6.3 Liter</option>
            <option value="6.4 Liter">6.4 Liter</option>
            <option value="6.5 Liter">6.5 Liter</option>
            <option value="6.6 Liter">6.6 Liter</option>
            <option value="6.7 Liter">6.7 Liter</option>
            <option value="6.8 Liter">6.8 Liter</option>
            <option value="6.9 Liter">6.9 Liter</option>
            <option value="7.0 Liter">7.0 Liter</option>
            <option value="7.1 Liter">7.1 Liter</option>
            <option value="7.2 Liter">7.2 Liter</option>
            <option value="7.3 Liter">7.3 Liter</option>
            <option value="7.4 Liter">7.4 Liter</option>
            <option value="7.5 Liter">7.5 Liter</option>
            <option value="7.6 Liter">7.6 Liter</option>
            <option value="7.7 Liter">7.7 Liter</option>
            <option value="7.8 Liter">7.8 Liter</option>
            <option value="7.9 Liter">7.9 Liter</option>
            <option value="8.0 Liter">8.0 Liter</option>
            <option value="8.1 Liter">8.1 Liter</option>
            <option value="8.2 Liter">8.2 Liter</option>
            <option value="8.3 Liter">8.3 Liter</option>
            <option value="8.4 Liter">8.4 Liter</option>
            <option value="8.5 Liter">8.5 Liter</option>
            <option value="8.6 Liter">8.6 Liter</option>
            <option value="8.7 Liter">8.7 Liter</option>
            <option value="8.8 Liter">8.8 Liter</option>
            <option value="8.9 Liter">8.9 Liter</option>
            <option value="9.0 Liter">9.0 Liter</option>
            <option value="9.1 Liter">9.1 Liter</option>
            <option value="9.2 Liter">9.2 Liter</option>
            <option value="9.3 Liter">9.3 Liter</option>
            <option value="9.4 Liter">9.4 Liter</option>
            <option value="9.5 Liter">9.5 Liter</option>
            <option value="9.6 Liter">9.6 Liter</option>
            <option value="9.7 Liter">9.7 Liter</option>
            <option value="9.8 Liter">9.8 Liter</option>
            <option value="9.9 Liter">9.9 Liter</option>
            <option value="10.0 Liter">10.0 Liter</option>
          </select>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-6">
          <select
            name="year"
            id="id_year"
            required=""
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              - Select Year -
            </option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1991">1990</option>
          </select>
        </div>
        <div className="col-span-12 flex items-center justify-between">
          <button
            className="focus:shadow-outline w-full rounded bg-orange-400 px-4 py-2 font-bold text-white hover:bg-orange-700 focus:outline-none"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
