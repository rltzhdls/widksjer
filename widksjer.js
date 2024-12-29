$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/lineageM/update/230315/bg_003_classchage.mp4";
        document.getElementById('vd').load();
    }
	}
});

