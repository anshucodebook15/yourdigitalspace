import { useEffect, useState } from "react";
import axios from "axios";
import { useEmployee } from "../context/context.register.employee";

const STATES_API = "https://api.countrystatecity.in/v1/countries/IN/states";
const CITIES_API = (stateCode: string) =>
  `https://api.countrystatecity.in/v1/countries/IN/states/${stateCode}/cities`;
const API_KEY = "YOUR_API_KEY";

const AddressStep = () => {
  const { employee, setEmployee, validateStep, stepErrors } = useEmployee();
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states on mount
  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const res = await axios.get(STATES_API, {
          headers: { "X-CSCAPI-KEY": API_KEY },
        });
        setStates(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!employee.personal.address.state) return;
    const fetchCities = async () => {
      setLoadingCities(true);
      try {
        const res = await axios.get(
          CITIES_API(employee.personal.address.state),
          {
            headers: { "X-CSCAPI-KEY": API_KEY },
          }
        );
        setCities(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCities(false);
      }
    };
    fetchCities();
  }, [employee.personal.address.state]);

  const handleAddressChange = (
    field: keyof typeof employee.personal.address,
    value: string
  ) => {
    setEmployee((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        address: { ...prev.personal.address, [field]: value },
      },
    }));
    validateStep("personal"); // live validate
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Street */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Street
        </label>
        <input
          type="text"
          placeholder="Street address"
          value={employee.personal.address.street}
          onChange={(e) => handleAddressChange("street", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.["address.street"] && (
          <p className="text-red-500 text-xs">
            {stepErrors.personal["address.street"]}
          </p>
        )}
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          State
        </label>
        <select
          value={employee.personal.address.state}
          onChange={(e) => handleAddressChange("state", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select State</option>
          {loadingStates ? (
            <option>Loading...</option>
          ) : (
            states.map((s) => (
              <option key={s.iso2} value={s.iso2}>
                {s.name}
              </option>
            ))
          )}
        </select>
        {stepErrors.personal?.["address.state"] && (
          <p className="text-red-500 text-xs">
            {stepErrors.personal["address.state"]}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <select
          value={employee.personal.address.city}
          onChange={(e) => handleAddressChange("city", e.target.value)}
          disabled={!employee.personal.address.state || loadingCities}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select City</option>
          {loadingCities ? (
            <option>Loading...</option>
          ) : (
            cities.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))
          )}
        </select>
        {stepErrors.personal?.["address.city"] && (
          <p className="text-red-500 text-xs">
            {stepErrors.personal["address.city"]}
          </p>
        )}
      </div>

      {/* Zip */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Zip Code
        </label>
        <input
          type="text"
          placeholder="Zip code"
          value={employee.personal.address.zip}
          onChange={(e) => handleAddressChange("zip", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        {stepErrors.personal?.["address.zip"] && (
          <p className="text-red-500 text-xs">
            {stepErrors.personal["address.zip"]}
          </p>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Country
        </label>
        <input
          type="text"
          value="India"
          readOnly
          className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-100 cursor-not-allowed"
        />
        {stepErrors.personal?.["address.country"] && (
          <p className="text-red-500 text-xs">
            {stepErrors.personal["address.country"]}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressStep;
