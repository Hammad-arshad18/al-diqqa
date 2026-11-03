migrate((app) => {
  const definitions = [
    { name: 'enquiries', fields: [
      { name: 'name', type: 'text', required: true, max: 150 },
      { name: 'organisation', type: 'text', max: 200 },
      { name: 'email', type: 'email', required: true },
      { name: 'phone', type: 'text', max: 60 },
      { name: 'interest', type: 'select', required: true, maxSelect: 1, values: ['Foodstuffs', 'Livestock', 'Meat', 'General enquiry'] },
      { name: 'message', type: 'text', required: true, min: 10, max: 5000 },
      { name: 'consent', type: 'bool' }
    ] },
    { name: 'email_signups', fields: [
      { name: 'email', type: 'email', required: true },
      { name: 'consent', type: 'bool' }
    ] }
  ];
  definitions.forEach(definition => {
    let existing;
    try { existing = app.findCollectionByNameOrId(definition.name); } catch (_) { existing = null; }
    if (!existing) {
      app.save(new Collection({ name: definition.name, type: 'base', listRule: null, viewRule: null, createRule: '@request.body.consent = true', updateRule: null, deleteRule: null, fields: [...definition.fields,
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true }
      ] }));
    }
  });
}, (app) => {
  ['email_signups', 'enquiries'].forEach(name => {
    const collection = app.findCollectionByNameOrId(name);
    app.delete(collection);
  });
});
