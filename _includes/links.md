{% for link in site.data.linkcode %}
    {% assign code = link[0] %}
    {% if link[1].first %}{% comment %}<!-- if value is array -->{% endcomment %}
        {% for langlink in link[1] %}{% if langlink[1] %}
[{{code}}.{{langlink[0]}}]: {{langlink[1]}}
        {% endif %}{% endfor %}
    {% else %}
[{{code}}]: {{link[1]}}   
    {% endif %}
{% endfor %}