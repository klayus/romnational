import React, { useRef } from "react";
import "./formStyle.scss";

function FormContact() {
  return (
    <>
      <div class="container1">
        <form action={null}>
          <label for="fname">Nume</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="numele dvoastra"
          ></input>

          <label for="lname">Email</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="adresa email"
          ></input>

          <label for="subject">Subiect</label>
          <textarea id="subject" name="subject" placeholder="Mesaj"></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}

export default FormContact;
