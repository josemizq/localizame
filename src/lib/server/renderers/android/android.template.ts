export const stringsTemplate = `<?xml version="1.0" ?>
<resources>
    {{#literals}}
    <string name="{{key}}">{{value}}</string>
    {{/literals}}
</resources>`;
