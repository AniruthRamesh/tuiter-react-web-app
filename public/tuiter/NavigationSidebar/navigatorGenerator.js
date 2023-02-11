import navigator from "./navigator.js";

const navigatorGenerator = (whereAmi,active) => {
    return(`
    <a href="${whereAmi.link}" style="text-decoration:none">    
    <span class="list-group-item ${whereAmi.page===active? `active`: ``}">
        ${whereAmi.icon}
        <span class="d-none d-xl-inline m-3">
        ${whereAmi.page}</span>
    </span></a>
    `)
}

export default navigatorGenerator