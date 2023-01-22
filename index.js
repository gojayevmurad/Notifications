const notifications = document.querySelector(".notifications"),
buttons = document.querySelector(".buttons");

  
const notifactionDetails = {
    timer: 5000,
    error:{
        text: 'Notification text',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e24d4c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
    },
    success:{
        text: 'Notification text',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0abf30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>'
    },
    warning:{
        text: 'Notification text',
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9bd0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
    },
    info:{
        text: 'Notification text',
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    },
    cancel:'<svg onclick=deleteNotification(this.parentElement) class="cancel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg>'
    
}

const deleteNotification = (toast) =>{

    toast.classList.add('hide')
    setInterval(() => {
        toast.remove()
    }, 400);

}

  



const createNotification = (id) => {
  const notification = document.createElement("li");
  notification.id = id;
  const {text, svg} = notifactionDetails[id]
  const cancelBtn = notifactionDetails.cancel
  notification.classList = "notification";
  notification.innerHTML = `
        <div class="content">
            <div>
                ${svg}
            </div>
            <p>${text}</p>
        </div>
        ${cancelBtn}
    `;
  notifications.appendChild(notification);
  setTimeout(() => {
    deleteNotification(notification)
  }, 5000);
};

buttons.childNodes.forEach((button) => {
  button.addEventListener("click", () => {
    createNotification(button.getAttribute('id'));
  });
});
