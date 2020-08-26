javascript: (function() {
    var currentPage = 1;
    var attempts = 0;
    console.log('Execution starts in 5 seconds... Do NOT click it again.');
    var refreshIntervalId = setInterval(function() {
        if (attempts < 6) {

            var page = parseInt(document.evaluate("/html/body/form/div[3]/section/div[3]/div/section[2]/div/div/div/table/tbody/tr[4]/td/div/div/div[1]/table/tbody/tr/td[5]/input", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.value);
            if (page == currentPage) {

                if (page == 1) {

                    var xpath = document.evaluate("/html/body/form/div[3]/section/div[3]/div/section[2]/div/div/div/table/tbody/tr[5]/td[3]/div/div[1]/div/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[5]/td[2]/table/tbody", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                } else {

                    var xpath = document.evaluate("/html/body/form/div[3]/section/div[3]/div/section[2]/div/div/div/table/tbody/tr[5]/td[3]/div/div[1]/div/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td[1]/table/tbody", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                }

                var x = xpath.querySelectorAll('tr');

                x.forEach(function(e) {
                    var va = e.querySelectorAll('td');
                    va.forEach(function(p) {
                        if (p.innerText.includes("- I") && !p.innerText.includes('Information Technology') && !p.innerText.includes('-  - I')) {

                            if (va[5].innerText.trim().length == 0) {
                                console.log("Time not logged for ", p.innerText);

                            }
                        }

                    });

                });
                console.log("Searching Completed on Page ", page);
                currentPage = currentPage + 1;
                attempts = 0;

                document.evaluate("/html/body/form/div[3]/section/div[3]/div/section[2]/div/div/div/table/tbody/tr[4]/td/div/div/div[1]/table/tbody/tr/td[11]/div/div[1]/table/tbody/tr/td/input[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()
            } else {
                attempts += 1;
            }
        } else {
            console.log('Completed Searching, Thank You!!');
            clearInterval(refreshIntervalId);

        }
    }, 5000);
})();
