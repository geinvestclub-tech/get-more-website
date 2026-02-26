import Link from "next/link";

export default function VIPPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(184,150,62,0.6) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">מעטפת השירות שלנו</span>
          <h1
            className="text-5xl md:text-7xl text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            מעטפת
            <br />
            <span className="gold-shimmer">VIP</span>
          </h1>
          <p className="text-cream/60 text-xl max-w-2xl leading-relaxed">
            שירות אישי ומותאם אישית לכל לקוח. לא תבנית. לא אוטומציה. בני אדם שמבינים את הצרכים שלך.
          </p>
        </div>
      </section>

      {/* Envelope Details */}
      <section className="py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="section-label">מה כוללת המעטפת</span>
              <h2
                className="text-4xl text-charcoal mt-4 mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                כל מה שאתה צריך —
                <br />
                בחבילה אחת
              </h2>
              <p className="text-charcoal-light text-base leading-relaxed mb-8">
                GET MORE לא מוכרת מוצרים. אנחנו מספקים ליווי מקצועי שמתחיל עוד לפני שהחלטת להשקיע ונמשך לאורך כל חיי ההשקעה. הצוות שלנו מכיר אותך, מבין את יעדיך, ומוודא שכל נקודת מגע עם בית ההשקעות תהיה חלקה ומקצועית.
              </p>

              <div className="space-y-4">
                {[
                  "מנהל לקוח אישי ייעודי — אחד, לא קול תפריט",
                  "תיאום פגישות והצגת חומרי מידע בשם בית ההשקעות",
                  "בדיקת כשירות מקדימה ושקטה, ללא רישומים מיותרים",
                  "ניהול תקשורת שוטפת מול צוות בית ההשקעות",
                  "זמינות מלאה בערוצים מרובים — טלפון, WhatsApp, דוא\"ל",
                  "עדכונים שוטפים בהתאם להעדפות הלקוח",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-gold mt-1 flex-shrink-0">◆</span>
                    <span className="text-charcoal-light text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "שיחת היכרות ראשונית",
                  desc: "שיחה אישית עם מנהל הלקוחות הבכיר, ללא לחץ ועם הכרה מלאה בצרכים.",
                  icon: "◯",
                },
                {
                  title: "ניתוח פרופיל וצרכים",
                  desc: "הבנה מעמיקה של הצרכים, ציר הזמן וסדרי העדיפויות שלך לפני כל צעד.",
                  icon: "◈",
                },
                {
                  title: "הצגת הזדמנויות רלוונטיות",
                  desc: "חיבור ישיר לבית השקעות המציע הזדמנויות שמתאימות לפרופיל שלך.",
                  icon: "◇",
                },
                {
                  title: "ליווי עד לסיום התהליך",
                  desc: "אנחנו נשארים לידך עד לחתימה על המסמכים הרשמיים מול בית ההשקעות.",
                  icon: "◉",
                },
              ].map((card) => (
                <div key={card.title} className="luxury-card flex gap-5 items-start">
                  <span className="text-gold text-2xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h3 className="text-charcoal font-semibold text-base mb-1">{card.title}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-beige border-t border-gold/15">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl text-charcoal mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            מוכן לשמוע יותר?
          </h2>
          <p className="text-charcoal-light mb-8">שיחת ייעוץ ראשונית ללא עלות ובדיסקרטיות מלאה</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=check" className="btn-primary px-10 py-4">
              בדיקת התאמה דיסקרטית
            </Link>
            <Link href="/contact" className="btn-outline px-10 py-4">
              תיאום שיחה
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
