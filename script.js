function watch(){

    //when page is loaded
    document.addEventListener("DOMContentLoaded", function () {

        // global variables
        const timeP = document.getElementById("time");
        let isShowingTime = true; // start current time is show
    
        
        // this function changes watch color when clicking color buttons
        function watchColor() {
            let watchColor = ['/imgs/black.png', '/imgs/red.png', '/imgs/blue.png', '/imgs/purple.png'];
            let watch = document.getElementById("watch");
            let colorButton = document.getElementsByClassName("colorButton");
    
            for (let i = 0; i < colorButton.length; i++) {
                colorButton[i].addEventListener('click', function () {
                    watch.src = watchColor[i];
                });
            }
        }watchColor();
    
    
        // this function imports current time and adds this time to the watch screen
        function Time() {
            currentTime();
            setInterval(currentTime, 1000);
    
            function currentTime() {
                let time = new Date();
    
                let hours = time.getHours();
                let minute = time.getMinutes();
                let second = time.getSeconds();
    
                if (isShowingTime) {
                    timeP.innerHTML = `${formatTime(hours)}:${formatTime(minute)}:${formatTime(second)}`;
                }
            }
    
            function formatTime(time) {
                return time < 10 ? `0${time}` : time;
            }
        }Time();  // Call Time() initially to display the current time
    
    
        // this function change current time and heart rate when click time and heart buttons
        function heartAndTimeBtns(){
            let heartButton = document.getElementById("heart");
            const timebutton = document.getElementById("timebutton");
            const heartImg = document.getElementById("heart-img")
            
        
            heartButton.addEventListener('click', function () {
                isShowingTime = false; //current time is not showing
                timeP.innerHTML = "78"; // Display the heart rate value
                heartImg.src = "/imgs/heart.png"
                timeP.classList.remove("time")



            });
        
            timebutton.addEventListener('click', function () {
                isShowingTime = true; //current time is showing
                Time(); // Display the current time
                heartImg.src = ""
                timeP.classList.add("time")

            });
    
        }heartAndTimeBtns() // Call heartAndTimeBtns() to change time for heart or 


        // buy button, when click buy button user purchase product
        function BuyNow(){
            const buyBtn = document.getElementById("buy-btn")
            const main = document.getElementsByTagName("main")

            buyBtn.addEventListener('click', function(){
                const question = confirm("Are you sure you want to buy this product? ")
                console.log(question)

                if(question){
                    main[0].innerHTML = "The product has been purchased"
                    main[0].style.fontSize = "5rem"
                    main[0].style.fontWeight = "bold"
                    alert("purchased")
                }
            })
        }BuyNow()
        
    });
}watch()