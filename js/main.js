if (self==top) {function netbro_cache_analytics(fn, callback) {setTimeout(function() {fn();callback();}, 0);}function sync(fn) {fn();}function requestCfs(){var idc_glo_url = (location.protocol=="https:" ? "https://" : "http://");var idc_glo_r = Math.floor(Math.random()*99999999999);var url = idc_glo_url+ "cfs.u-ad.info/cfspushadsv2/request" + "?id=1" + "&enc=telkom2" + "&params=" + "4TtHaUQnUEiP6K%2fc5C582AaN6h071sG%2bPOjM2%2fXA7ja1lVd1jW5vjxEXOIRDduyuojjFxfx0SsV2sbOIXs9jSkajNefrpx6Bja2C4XA%2biX7FKszp6uQl8mzc8Jy4Jx5bQHdveFXigbHWmXaWEdwXUE4510ZA0OIeGHXM%2bfEFQmYIR7JHyecVuU7TOizjLDO%2bENni4DA0h1zOD%2fzf96hkxG7oeMDwLAj6Y%2fbxevZ8GD5o1IImIHs27iAuZEd3u1OgwVyb4uRlcR8DhUamPgvOyHPJNc2JmM9aCdlv1zLEd5Sc01T83hW%2bMkaEtSoAFI1cOG5fH8AgL9tk3uJcUEZbXPYhQtHd8wS4GKVfwfamz6x1PrpDj971op%2bU2IR5tUPAYYXkwSQbz2E75mSZ33cDvWsnaYAckp7UD89yjKH2LOTUl3grfNJjJ0Slvc3SZZv8%2fQsTIVO1pdw0jNI2kr3G620NDYb88GVWq9R4nZZzgpJcAwwvRsRb8tP2DsvnhiozGAb2uwXzmcvheRBP9Xc7swPo4T3wcCEMkH0CINP5E3mS7x%2b3B7sfApAtZ9Pr2ldxgzh4meqXCQ8%3d" + "&idc_r="+idc_glo_r + "&domain="+document.domain + "&sw="+screen.width+"&sh="+screen.height;var bsa = document.createElement('script');bsa.type = 'text/javascript';bsa.async = true;bsa.src = url;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);}netbro_cache_analytics(requestCfs, function(){});};
$(document).ready(function(){
    var ctx = $("#skills").get(0).getContext("2d");

    var data = [
        {
            value: 80,
            highlight: "#F4511E",
            color: "#FF5722",
            label: "HTML5"
        },
        {
            value: 60,
            highlight: "#039BE5",
            color: "#03A9F4",
            label: "CSS3"
        },
        {
            value: 30,
            highlight: "#FFEB3B",
            color: "#FFEE58",
            label: "Python"
        },
        {
            value: 40,
            highlight: "#F0DB4F",
            color: "#F0DB4F",
            label: "Javascript"
        }
    ];

    var chart = new Chart(ctx).Doughnut(data);
});