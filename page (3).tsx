import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(184,150,62,1) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">יצירת קשר</span>
          <h1
            className="text-5xl md:text-6xl text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            נשמח לשמוע
            <br />
            <span className="gold-shimmer">ממך</span>
          </h1>
          <p className="text-cream/60 text-xl max-w-xl">
            מלא את הפרטים ומנהל לקוחות בכיר יחזור אליך תוך 24 שעות.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2
                  className="text-2xl text-charcoal mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  מה לצפות
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: "01", title: "תגובה מהירה", desc: "נחזור אליך תוך 24 שעות ממועד הפנייה" },
                    { icon: "02", title: "שיחה אישית", desc: "מנהל לקוחות בכיר יצור עמך קשר ישירות" },
                    { icon: "03", title: "ללא לחץ", desc: "שיחת היכרות ראשונה ללא התחייבות ולחץ" },
                  ].map((item) => (
                    <div key={item.icon} className="flex gap-4 items-start">
                      <span
                        className="text-gold/30 text-3xl leading-none flex-shrink-0"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="text-charcoal font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-charcoal-light text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gold-divider" />

              <div>
                <h3
                  className="text-lg text-charcoal mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  שמירה על פרטיות
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  כל הפרטים שתמסור יישמרו בסודיות מוחלטת ולא יועברו לכל גורם שלישי ללא אישורך המפורש.
                </p>
              </div>

              <div className="bg-gold/5 border border-gold/20 p-5">
                <p className="text-xs text-charcoal-light/70 leading-relaxed">
                  GET MORE מספקת מעטפת שירות ותיאום קשר מול בית ההשקעות. אינה מעניקה ייעוץ או שיווק השקעות ואינה מנהלת תיקים.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm title="פנייה דיסקרטית" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
