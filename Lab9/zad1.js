const currentUser = {
    name:"Adam", 
    surname: "Spadam",
    email: "AdamRISpadam@wp.pl", 
    www: "www.aris.com", 
    userType: "admin", 
    isActive: false,
    show(){
        console.log(this);
    },
    setActive(active){
        if(active === true){
            this.isActive = true;
        } else if(active === false){
            this.isActive = false;
        } else {
            console.log("blad");
        }
    }
}

currentUser.show();
currentUser.setActive(true);
currentUser.show();