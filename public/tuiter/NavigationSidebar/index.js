import navigatorGenerator from "./navigatorGenerator.js";
import navigator from "./navigator.js";

const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
            <i class="fa-brands fa-twitter list-group-item"></i>
            ${navigator.map(page => navigatorGenerator(page,active)).join('')}
          </div>

          <a href="../tuit.html">
          <button
            class="btn btn-primary p-3 float-end mt-2 w-100" style="border-radius:30px;"
            >Tuit</button
          ></a>
    `);
}

export default NavigationSidebar;