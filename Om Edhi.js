
    const tabs = document.querySelectorAll(".tab");
    const tabContent = document.querySelectorAll(".tab-content");
    
    let tabNo = 0;
    let contentNo = 0;
    
    tabs.forEach(tab => {
      tab.dataset.id = tabNo;
      tabNo++;
      tab.addEventListener("click", function () {
        tabs.forEach(tab => {
          tab.classList.remove("active");
          tab.classList.add("non-active");
        });
        this.classList.remove("non-active");
        this.classList.add("active");
        tabContent.forEach(content => {
          content.classList.add("hidden");
          if (content.dataset.id === tab.dataset.id) {
            content.classList.remove("hidden");
          }
        });
      });
    });
    
    tabContent.forEach(content => {
      content.dataset.id = contentNo;
      contentNo++;
    });
    //# sourceURL=pen.js
      