import DropdownAnchor from "./DropdownAnchor";
import InputText from "./InputText";

export default function Personal({ data = {}, active, updater, toggler }) {
  function updateData(e, name) {
    updater({ ...data, [name]: e.target.value });
  }

  function setActive(e) {
    e.preventDefault();
    toggler("personal");
  }

  return (
    <section className="personal">
      <DropdownAnchor label="Personal Information" toggle={setActive} />
      {active && (
        <ul>
          <li>
            <InputText
              label="Full Name"
              value={data.name}
              changeHandler={(e) => updateData(e, "name")}
            />
          </li>
          <li>
            <InputText
              label="Country"
              value={data.country}
              changeHandler={(e) => updateData(e, "country")}
            />
          </li>
          <li>
            <InputText
              label="City"
              value={data.city}
              changeHandler={(e) => updateData(e, "city")}
            />
          </li>
          <li>
            <InputText
              label="Phone Number"
              value={data.phone}
              changeHandler={(e) => updateData(e, "phone")}
            />
          </li>
          <li>
            <InputText
              label="Email Address"
              value={data.email}
              changeHandler={(e) => updateData(e, "email")}
            />
          </li>

          <li>
            <label>
              <span> Professional Summary </span>
              <textarea
                value={data.summary}
                onChange={(e) => updateData(e, "summary")}
              ></textarea>
            </label>
          </li>
        </ul>
      )}
    </section>
  );
}
