/// <reference path="../pb_data/types.d.ts" />
// Forwards each new email_signups record to Reach (email-marketing).
// Reach requires an email — skip the sync when absent. A failed Reach call
// must never lose the locally-saved contact, so failures are logged and swallowed.
onRecordAfterCreateSuccess((e) => {
  const email = e.record.get("email");
  if (!email) {
    e.next();
    return;
  }
  try {
    $http.send({
      url: $os.getenv("REACH_API_URL") + "/api/public/v1/contacts",
      method: "POST",
      headers: {
        "Authorization": "Bearer " + $os.getenv("REACH_API_TOKEN"),
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        groupName: "Hostinger AI Builder newsletter form",
        contacts: [{
          email: email,
        }],
      }),
    });
  } catch (err) {
    $app.logger().error("Reach contact sync failed", "err", String(err));
  }
  e.next();
}, "email_signups");
