// CODE FOR THE DARK MODE

var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dartheme')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'lighttheme')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 0)
}

$("#footer a[href]").click(function (e) {
    e.preventDefault();
    if (this.href) {
        var target = this.href;
        let w = window.innerWidth*0.9
        let h = window.innerHeight*0.9
        let mt = window.innerHeight - h
        let ml = window.innerWidth - w
        if(target.slice(-6)!=="#modal") {
            setTimeout(function () {
                window.open(target, "_blank", `toolbar=yes,scrollbars=yes,resizable=yes,top=${mt},left=${ml},width=${w},height=${h}`);
            }, 500);
        }
    }
});