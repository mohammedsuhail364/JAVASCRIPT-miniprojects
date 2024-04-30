var xhr = new XMLHttpRequest();
var url = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json";
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    
    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var text = document.createElement('h1');
        text.textContent = article.title;
        articleDiv.appendChild(text);

        var description = document.createElement('ul');
        var descriptionItem = document.createElement('li');
        descriptionItem.textContent = article.description;
        description.appendChild(descriptionItem);
        articleDiv.appendChild(description);

        var text1 = document.createElement('h3');
        text1.textContent = 'ways_to_achieve';
        articleDiv.appendChild(text1);

        var wayinbox = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listitem = document.createElement('li');
            listitem.textContent = way;
            wayinbox.appendChild(listitem);
        });
        articleDiv.appendChild(wayinbox);

        var benefits_ = document.createElement('h3');
        benefits_.textContent = 'Benefits';
        articleDiv.appendChild(benefits_);

        var benefits_in = document.createElement('ul');
        article.benefits.forEach(function (ben) {
            var ben1 = document.createElement('li');
            ben1.textContent = ben;
            benefits_in.appendChild(ben1);
        });
        articleDiv.appendChild(benefits_in);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();
