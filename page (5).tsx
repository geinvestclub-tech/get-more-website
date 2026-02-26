import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-beige to-parchment">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(184,150,62,0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(184,150,62,0.4) 0%, transparent 70%)",
            }}
          />
          {/* Geometric lines */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 800" fill="none">
            <line x1="0" y1="200" x2="1200" y2="600" stroke="#B8963E" strokeWidth="1"/>
            <line x1="0" y1="600" x2="1200" y2="200" stroke="#B8963E" strokeWidth="0.5"/>
            <circle cx="200" cy="400" r="300" stroke="#B8963E" strokeWidth="0.5"/>
            <circle cx="1000" cy="400" r="300" stroke="#B8963E" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="section-label">הון פרטי — רמה אחרת</span>
              <div className="h-px w-16 bg-gold opacity-60" />
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-charcoal leading-tight mb-8 animate-fade-in-up animate-delay-100"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
            >
              הכסף שלך
              <br />
              <span className="gold-shimmer">ראוי ליותר</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-12 max-w-2xl animate-fade-in-up animate-delay-200">
              GET MORE מציעה למשקיעים כשירים מעטפת שירות פרמיום — תיאום, ליווי וחיבור ישיר לבתי השקעות מובחרים. ללא פשרות, ברמה הגבוהה ביותר.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link href="/contact?type=check" className="btn-primary text-center text-base px-8 py-4">
                בדיקת התאמה דיסקרטית
              </Link>
              <Link href="/contact" className="btn-outline text-center text-base px-8 py-4">
                תיאום שיחה
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gold/20 animate-fade-in-up animate-delay-400">
              {[
                { num: "100%", label: "דיסקרטיות מלאה" },
                { num: "VIP", label: "שירות אישי בלבד" },
                { num: "ישיר", label: "חיבור לבית ההשקעות" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-3xl md:text-4xl text-gold mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs text-charcoal-light tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-charcoal">SCROLL</span>
          <div className="w-px h-12 bg-gold animate-pulse" />
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-charcoal py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">מי אנחנו</span>
              <h2
                className="text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                מעטפת שירות
                <br />
                <em>לא מתפשרת</em>
              </h2>
              <p className="text-cream/60 text-base leading-relaxed mb-6">
                אנחנו לא מנהלי תיקים ולא יועצי השקעות. אנחנו המסדרונות שבין ההון שלך לבין ההזדמנויות הנדירות שרוב המשקיעים לא מגיעים אליהן.
              </p>
              <p className="text-cream/60 text-base leading-relaxed mb-10">
                GET MORE מתמחה בתיאום קשר מקצועי בין משקיעים כשירים לבתי השקעות מובחרים — עם ליווי אישי, דיסקרטיות מוחלטת וסטנדרט שירות יוצא דופן.
              </p>
              <Link href="/vip" className="btn-outline border-gold/40 text-gold hover:border-gold">
                גלה את מעטפת ה-VIP
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "◆", title: "תיאום ישיר", desc: "חיבור מהיר ומקצועי לבית ההשקעות המתאים" },
                { icon: "◈", title: "ליווי אישי", desc: "מנהל לקוח ייעודי לאורך כל התהליך" },
                { icon: "◇", title: "דיסקרטיות", desc: "פרטייך מוגנים ולא יועברו לשום גורם" },
                { icon: "◉", title: "פרמיום בלבד", desc: "עובדים אך ורק עם משקיעים כשירים" },
              ].map((item) => (
                <div key={item.title} className="bg-charcoal-light/50 border border-gold/10 p-6 hover:border-gold/30 transition-colors">
                  <div className="text-gold text-xl mb-3">{item.icon}</div>
                  <h3 className="text-white text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-cream/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label">תהליך פשוט ומהיר</span>
          <h2
            className="text-4xl md:text-5xl text-charcoal mt-4 mb-16"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            שלושה צעדים בלבד
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "בדיקת התאמה", desc: "שיחה קצרה ודיסקרטית להבנת הצרכים ובחינת ההתאמה למסלול המתאים" },
              { num: "02", title: "חיבור לבית השקעות", desc: "תיאום ישיר מול בית ההשקעות הרלוונטי, כולל הצגת חומרי המידע הרשמיים" },
              { num: "03", title: "ליווי ומעקב", desc: "מנהל לקוח אישי נשאר בזמינות מלאה לאורך כל מחזור החיים של ההשקעה" },
            ].map((step) => (
              <div key={step.num} className="luxury-card text-right">
                <div
                  className="text-6xl text-gold/20 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-xl text-charcoal mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/process" className="btn-outline">
              לכל פרטי התהליך
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(184,150,62,0.8) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">הצעד הראשון</span>
          <h2
            className="text-4xl md:text-5xl text-white mt-4 mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            בדוק האם אתה מתאים
          </h2>
          <p className="text-cream/60 text-base mb-10">
            השיחה ראשונה היא ללא התחייבות, ללא עלות, וכמובן — בסודיות מוחלטת.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=check" className="btn-primary text-base px-10 py-4">
              בדיקת התאמה דיסקרטית
            </Link>
            <Link href="/guide" className="btn-outline border-gold/40 text-gold hover:border-gold text-base px-10 py-4">
              מדריך משקיע כשיר
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
