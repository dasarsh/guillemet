const fetch = require('node-fetch');
const htmlToJson = require('html-to-json');

module.exports = {

    fetchHtml() {
        const url = 'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases';
        var table;
        return fetch(url)
            .then(res => res.text())
            .then(body => table = body.substring(body.indexOf('<tbody>'), body.indexOf('</tbody>') + 8))
            .then(table => processHtml(table));

        function processHtml(html) {
            return htmlToJson.parse(html, {
                'data': function ($doc) {
                    var json = [];

                    $doc.find('tr').text().split('\t\n').forEach((row) => {
                        const splitRow = row.split('\n\t\t');

                        if (splitRow[0] == '') {
                            splitRow.shift();
                        }

                        json.push(
                            {
                                label: splitRow[0].trim(),
                                total: splitRow[1].trim(),
                                delta: splitRow[2].trim()
                            }
                        );
                    });

                    return json;
                }
            }, function (err, result) {

            });
        }
    },

};