// Comprehensive Question Database
const questionDatabase = {
    friendship: {
        easy: {
            happy: [
                "Siapa teman yang selalu bikin kamu ketawa?",
                "Apa hal paling lucu yang pernah kamu lakukan bareng teman?",
                "Teman mana yang paling bisa bikin mood kamu bagus?",
                "Apa tradisi unik yang kamu punya sama teman-teman?",
                "Siapa teman yang paling sering chat sama kamu?",
                "Apa makanan yang selalu kamu share sama teman?",
                "Teman mana yang paling cocok jadi partner crime kamu?",
                "Apa game yang paling seru dimain bareng teman?",
                "Siapa teman yang paling bisa dipercaya buat nyimpen rahasia?",
                "Apa momen paling epic bareng squad kamu?"
            ],
            thoughtful: [
                "Apa kualitas terpenting yang kamu cari dalam teman?",
                "Siapa teman yang paling mempengaruhi hidup kamu?",
                "Apa arti persahabatan yang sesungguhnya menurutmu?",
                "Bagaimana cara kamu menunjukkan kalau kamu peduli sama teman?",
                "Apa yang membuat persahabatan jadi bermakna?",
                "Siapa teman yang paling mengajarkan kamu tentang kehidupan?",
                "Apa nilai yang paling penting dalam persahabatan?",
                "Bagaimana cara kamu memilih teman yang tepat?",
                "Apa yang kamu lakukan ketika teman sedang down?",
                "Siapa teman yang paling mengerti kepribadian kamu?"
            ],
            curious: [
                "Gimana cara kamu biasanya kenalan sama orang baru?",
                "Apa yang bikin kamu langsung nyaman sama seseorang?",
                "Apa first impression yang biasanya orang punya tentang kamu?",
                "Gimana cara kamu tau kalau seseorang bisa jadi teman baik?",
                "Apa topik yang paling sering kamu bahas sama teman?",
                "Bagaimana cara kamu maintain friendship jarak jauh?",
                "Apa yang bikin kamu tertarik berteman dengan seseorang?",
                "Gimana cara kamu handle teman yang toxic?",
                "Apa red flag dalam persahabatan menurutmu?",
                "Bagaimana cara kamu approach orang yang pemalu?"
            ],
            nostalgic: [
                "Cerita tentang teman masa kecil yang paling berkesan!",
                "Apa kenangan paling indah bareng sahabat kamu?",
                "Mainan apa yang paling sering kamu main bareng teman waktu kecil?",
                "Tempat nongkrong favorit kamu sama teman-teman dulu?",
                "Apa lagu yang selalu ngingetin kamu sama sahabat?",
                "Cerita tentang sleepover paling seru yang pernah kamu alami!",
                "Apa tradisi masa kecil yang masih kamu kangen?",
                "Siapa teman SD/SMP yang paling kamu rindukan?",
                "Apa permainan tradisional yang sering kamu main bareng?",
                "Cerita tentang guru yang paling berkesan di sekolah!"
            ],
            adventurous: [
                "Apa petualangan yang ingin kamu lakuin bareng teman?",
                "Kalau bisa traveling bareng siapa aja, pilih siapa?",
                "Destinasi mana yang pengen kamu explore bareng squad?",
                "Apa aktivitas extreme yang pengen kamu coba bareng teman?",
                "Kalau bisa road trip ke mana aja, kemana kamu mau pergi?",
                "Apa bucket list yang pengen kamu selesaikan bareng sahabat?",
                "Festival atau event apa yang pengen kamu datangi bareng?",
                "Kalau bisa backpacking, negara mana yang jadi target?",
                "Apa challenge seru yang pengen kamu lakukan bareng teman?",
                "Kalau bisa camping di mana aja, lokasi mana yang kamu pilih?"
            ]
        },
        medium: {
            happy: [
                "Apa hal yang paling kamu syukuri dari persahabatan kamu saat ini?",
                "Bagaimana teman-teman mengubah hidup kamu jadi lebih baik?",
                "Apa momen terlucu yang bikin kamu dan teman ketawa sampai sakit perut?",
                "Siapa teman yang paling supportive dalam pencapaian kamu?",
                "Apa inside joke yang cuma kamu dan teman yang ngerti?",
                "Bagaimana cara kamu celebrate achievement bareng teman?",
                "Apa hal paling random yang pernah kamu lakukan spontan bareng teman?",
                "Siapa teman yang paling bisa bikin kamu confident?",
                "Apa tradisi ulang tahun yang paling berkesan bareng teman?",
                "Bagaimana teman-teman membantu kamu keluar dari comfort zone?"
            ],
            thoughtful: [
                "Bagaimana cara kamu mempertahankan persahabatan jarak jauh?",
                "Kapan terakhir kali kamu memaafkan teman yang menyakiti kamu?",
                "Apa yang membuat persahabatan bertahan lama menurutmu?",
                "Bagaimana cara kamu balance antara me time dan friend time?",
                "Apa sacrifice terbesar yang pernah kamu lakukan untuk teman?",
                "Bagaimana cara kamu support teman yang sedang struggle?",
                "Apa pelajaran terbesar yang kamu dapat dari persahabatan?",
                "Bagaimana cara kamu handle jealousy dalam persahabatan?",
                "Apa yang kamu lakukan ketika teman mulai berubah?",
                "Bagaimana cara kamu set boundaries dalam persahabatan?"
            ],
            curious: [
                "Apa yang membuat persahabatan bertahan lama menurutmu?",
                "Bagaimana cara kamu mengatasi konflik dengan teman dekat?",
                "Apa yang kamu lakukan ketika teman punya masalah yang sama?",
                "Bagaimana cara kamu handle drama dalam friend group?",
                "Apa yang bikin kamu merasa disconnected dari teman lama?",
                "Bagaimana cara kamu rebuild trust setelah dikhianati teman?",
                "Apa yang kamu lakukan ketika teman mulai toxic?",
                "Bagaimana cara kamu approach teman yang lagi avoid kamu?",
                "Apa yang bikin persahabatan jadi awkward menurutmu?",
                "Bagaimana cara kamu maintain friendship sambil sibuk kerja/kuliah?"
            ],
            nostalgic: [
                "Teman masa kecil mana yang paling kamu rindukan?",
                "Cerita tentang persahabatan yang berubah seiring waktu!",
                "Apa momen yang bikin kamu sadar kalau teman itu penting?",
                "Cerita tentang reunion yang paling berkesan!",
                "Apa yang paling kamu kangen dari persahabatan masa lalu?",
                "Siapa teman yang hilang kontak tapi masih kamu inget?",
                "Apa tradisi persahabatan yang udah ga bisa dilakukan lagi?",
                "Cerita tentang teman yang comeback setelah lama ga ketemu!",
                "Apa yang berubah dari cara kamu berteman dulu vs sekarang?",
                "Siapa teman yang paling berpengaruh di masa remaja kamu?"
            ],
            adventurous: [
                "Kalau bisa memulai bisnis bareng teman, bisnis apa yang kamu pilih?",
                "Apa project kreatif yang pengen kamu kerjakan bareng sahabat?",
                "Kalau bisa tinggal di satu rumah bareng best friend, kamu mau?",
                "Apa skill yang pengen kamu pelajari bareng teman?",
                "Kalau bisa bikin komunitas, tema apa yang kamu pilih?",
                "Apa volunteer work yang pengen kamu lakukan bareng teman?",
                "Kalau bisa collab dengan teman buat content, platform apa yang dipilih?",
                "Apa startup idea yang pengen kamu develop bareng squad?",
                "Kalau bisa organize event besar, event apa yang kamu buat?",
                "Apa social movement yang pengen kamu mulai bareng teman?"
            ]
        },
        hard: {
            thoughtful: [
                "Pernahkah kamu kehilangan sahabat karena perbedaan prinsip? Ceritakan!",
                "Bagaimana cara kamu membedakan teman sejati dengan teman biasa?",
                "Apa yang akan kamu lakukan jika sahabat melakukan sesuatu yang illegal?",
                "Bagaimana cara kamu handle ketika sahabat dan pasangan ga suka satu sama lain?",
                "Apa yang kamu lakukan ketika harus memilih antara dua sahabat yang konflik?",
                "Bagaimana cara kamu forgive teman yang betray kepercayaan kamu?",
                "Apa yang membuat kamu rela mengakhiri persahabatan lama?",
                "Bagaimana cara kamu handle ketika sahabat jadi successful sementara kamu struggle?",
                "Apa yang kamu lakukan ketika sahabat butuh bantuan tapi kamu ga mampu?",
                "Bagaimana cara kamu maintain persahabatan ketika hidup udah beda jalur?"
            ],
            curious: [
                "Apa yang akan kamu lakukan jika sahabat kamu melakukan sesuatu yang bertentangan dengan nilai kamu?",
                "Bagaimana cara kamu handle ketika sahabat toxic tapi susah dilepas?",
                "Apa yang kamu lakukan ketika sahabat selalu compete sama kamu?",
                "Bagaimana cara kamu respond ketika sahabat constantly drain energy kamu?",
                "Apa yang kamu lakukan ketika sahabat ga support impian kamu?",
                "Bagaimana cara kamu handle ketika sahabat spread rumor tentang kamu?",
                "Apa yang kamu lakukan ketika sahabat manipulatif?",
                "Bagaimana cara kamu set boundaries dengan sahabat yang possessive?",
                "Apa yang kamu lakukan ketika sahabat constantly borrow money?",
                "Bagaimana cara kamu handle ketika sahabat dating ex kamu?"
            ],
            nostalgic: [
                "Persahabatan mana yang paling kamu sesali hilang dan kenapa?",
                "Apa mistake terbesar yang pernah kamu buat dalam persahabatan?",
                "Cerita tentang sahabat yang berubah drastis dan bikin kamu sedih!",
                "Apa yang akan kamu katakan ke sahabat yang udah ga contact lagi?",
                "Persahabatan mana yang berakhir dengan cara paling menyakitkan?",
                "Apa yang paling kamu sesali ga pernah bilang ke sahabat?",
                "Cerita tentang persahabatan yang ended karena misunderstanding!",
                "Apa yang akan kamu ubah dari cara kamu treat sahabat di masa lalu?",
                "Siapa sahabat yang paling kamu disappointed dan kenapa?",
                "Apa closure yang masih kamu butuhin dari persahabatan masa lalu?"
            ],
            adventurous: [
                "Kalau harus memilih antara karir impian atau tetap dekat dengan sahabat, kamu pilih mana?",
                "Apakah kamu rela pindah ke negara lain dan ninggalin semua sahabat?",
                "Kalau sahabat ajak kamu quit job dan start business bareng, kamu mau?",
                "Apakah kamu rela sacrifice relationship romantic demi persahabatan?",
                "Kalau sahabat butuh organ donor dan cuma kamu yang compatible, kamu mau?",
                "Apakah kamu rela bohong ke authorities buat protect sahabat?",
                "Kalau harus pilih save sahabat atau save stranger, kamu pilih siapa?",
                "Apakah kamu rela spend life savings buat help sahabat yang desperate?",
                "Kalau sahabat minta kamu jadi guarantor hutang besar, kamu mau?",
                "Apakah kamu rela take blame buat mistake yang sahabat buat?"
            ]
        }
    },

    love: {
        easy: {
            happy: [
                "Apa hal paling romantis yang pernah seseorang lakukan buat kamu?",
                "Gimana perasaan kamu waktu pertama kali jatuh cinta?",
                "Apa love language kamu yang paling dominan?",
                "Siapa celebrity crush kamu dari dulu sampai sekarang?",
                "Apa lagu yang paling romantis menurutmu?",
                "Gimana cara kamu express love ke orang yang kamu sayang?",
                "Apa gesture kecil yang bikin kamu melt?",
                "Siapa couple goals yang paling kamu admire?",
                "Apa pickup line paling cheesy yang pernah kamu denger?",
                "Gimana reaksi kamu waktu pertama kali ada yang confess?"
            ],
            thoughtful: [
                "Apa arti cinta yang sesungguhnya menurutmu?",
                "Kualitas apa yang paling penting dalam pasangan?",
                "Bagaimana cara kamu tau kalau kamu bener-bener cinta sama seseorang?",
                "Apa perbedaan antara cinta dan obsesi menurutmu?",
                "Bagaimana cara kamu maintain cinta dalam jangka panjang?",
                "Apa role cinta dalam hidup kamu?",
                "Bagaimana cara kamu balance antara cinta dan self-love?",
                "Apa yang membuat cinta jadi unconditional?",
                "Bagaimana cara kamu show appreciation ke pasangan?",
                "Apa foundation terpenting dalam relationship?"
            ],
            curious: [
                "Apa tanda-tanda kalau kamu lagi jatuh cinta?",
                "Gimana cara kamu tau kalau seseorang itu 'the one'?",
                "Apa red flag yang langsung bikin kamu turn off?",
                "Gimana cara kamu approach someone yang kamu suka?",
                "Apa yang bikin kamu attracted ke seseorang?",
                "Bagaimana cara kamu flirt yang natural?",
                "Apa yang kamu cari dari dating apps?",
                "Gimana cara kamu tau kalau seseorang interested sama kamu?",
                "Apa dealbreaker utama kamu dalam dating?",
                "Bagaimana cara kamu handle rejection?"
            ],
            nostalgic: [
                "Cerita tentang crush pertama kamu!",
                "Lagu apa yang selalu ngingetin kamu sama seseorang?",
                "Apa kenangan paling manis dari relationship pertama?",
                "Siapa first love kamu dan gimana ceritanya?",
                "Apa momen paling romantic yang pernah kamu alami?",
                "Cerita tentang valentine paling berkesan!",
                "Apa gift paling meaningful yang pernah kamu terima?",
                "Siapa yang ngajarin kamu tentang cinta pertama kali?",
                "Apa film/buku yang bikin kamu percaya sama true love?",
                "Cerita tentang first kiss yang awkward tapi sweet!"
            ],
            adventurous: [
                "Kalau bisa date di mana aja, kamu mau date di mana?",
                "Apa rencana romantis paling gila yang pernah terlintas di pikiran kamu?",
                "Kalau bisa propose di lokasi manapun, kamu pilih dimana?",
                "Apa bucket list romantic yang pengen kamu achieve?",
                "Kalau bisa recreate scene romantic dari film, scene apa yang dipilih?",
                "Apa adventure yang pengen kamu lakukan bareng pasangan?",
                "Kalau bisa surprise pasangan dengan cara apapun, kamu mau gimana?",
                "Apa fantasy date yang paling unrealistic tapi pengen banget?",
                "Kalau bisa time travel buat date, era mana yang dipilih?",
                "Apa romantic gesture yang pengen kamu lakukan tapi belum kesampaian?"
            ]
        },
        medium: {
            happy: [
                "Bagaimana cara kamu menunjukkan kasih sayang ke orang yang kamu cintai?",
                "Apa momen yang bikin kamu realize kalau kamu udah deep in love?",
                "Bagaimana cara kamu celebrate anniversary atau milestone relationship?",
                "Apa hal kecil yang dilakukan pasangan yang bikin kamu happy?",
                "Bagaimana cara kamu support pasangan dalam bad days?",
                "Apa tradition romantic yang pengen kamu mulai dengan pasangan?",
                "Bagaimana cara kamu keep romance alive dalam long term relationship?",
                "Apa surprise terbaik yang pernah kamu kasih ke pasangan?",
                "Bagaimana cara kamu handle long distance relationship?",
                "Apa yang bikin kamu grateful dalam relationship saat ini?"
            ],
            thoughtful: [
                "Apa yang lebih penting: mencintai atau dicintai? Kenapa?",
                "Bagaimana cara kamu menyeimbangkan cinta dan karir?",
                "Apa sacrifice yang rela kamu lakukan demi cinta?",
                "Bagaimana cara kamu handle perbedaan values dengan pasangan?",
                "Apa yang kamu lakukan ketika cinta mulai fade?",
                "Bagaimana cara kamu maintain individuality dalam relationship?",
                "Apa yang membuat relationship worth fighting for?",
                "Bagaimana cara kamu handle ketika pasangan berubah?",
                "Apa role communication dalam relationship menurutmu?",
                "Bagaimana cara kamu build trust dalam relationship?"
            ],
            curious: [
                "Apa dealbreaker utama kamu dalam hubungan?",
                "Bagaimana cara kamu mengatasi rasa cemburu?",
                "Apa yang kamu lakukan ketika pasangan punya bad habit?",
                "Bagaimana cara kamu handle conflict dalam relationship?",
                "Apa yang bikin kamu consider break up dengan seseorang?",
                "Bagaimana cara kamu know when to fight for relationship vs when to let go?",
                "Apa yang kamu lakukan ketika pasangan ga supportive sama goals kamu?",
                "Bagaimana cara kamu handle ketika pasangan close sama ex?",
                "Apa yang kamu lakukan ketika feeling disconnected dari pasangan?",
                "Bagaimana cara kamu rebuild relationship setelah big fight?"
            ],
            nostalgic: [
                "Hubungan mana yang paling mengajarkan kamu tentang cinta?",
                "Apa pelajaran cinta terbesar yang kamu dapat dari orangtua?",
                "Cerita tentang relationship yang ended in good terms!",
                "Apa yang paling kamu miss dari being single?",
                "Siapa ex yang masih kamu appreciate sebagai person?",
                "Apa tradition family tentang love yang kamu pengen continue?",
                "Cerita tentang couple elderly yang inspire kamu!",
                "Apa advice tentang cinta terbaik yang pernah kamu terima?",
                "Siapa role model relationship yang kamu look up to?",
                "Apa yang berubah dari cara kamu love seiring bertambah umur?"
            ],
            adventurous: [
                "Kalau bisa menikah di mana aja, kamu pilih di mana?",
                "Rencana honeymoon impian kamu seperti apa?",
                "Apa romantic adventure yang pengen kamu lakukan sebelum settle down?",
                "Kalau bisa live anywhere dengan pasangan, negara mana yang dipilih?",
                "Apa business yang pengen kamu start bareng pasangan?",
                "Kalau bisa adopt lifestyle apapun bareng pasangan, lifestyle apa yang dipilih?",
                "Apa project kreatif yang pengen kamu kerjakan bareng significant other?",
                "Kalau bisa experience love di era manapun, era mana yang dipilih?",
                "Apa challenge yang pengen kamu overcome bareng pasangan?",
                "Kalau bisa create perfect romantic getaway, seperti apa konsepnya?"
            ]
        },
        hard: {
            thoughtful: [
                "Apakah cinta pertama itu nyata atau hanya nostalgia?",
                "Bagaimana cara kamu move on dari seseorang yang sangat kamu cintai?",
                "Apa yang akan kamu lakukan jika harus memilih antara family approval dan true love?",
                "Bagaimana cara kamu handle ketika masih ada feelings ke ex sementara udah sama orang lain?",
                "Apa yang kamu lakukan ketika realize kalau kamu ga bisa give what pasangan need?",
                "Bagaimana cara kamu cope dengan heartbreak yang devastating?",
                "Apa yang membuat kamu stay dalam relationship yang toxic?",
                "Bagaimana cara kamu forgive pasangan yang cheat?",
                "Apa yang kamu lakukan ketika love someone yang ga bisa kamu have?",
                "Bagaimana cara kamu handle ketika pasangan struggle dengan mental health?"
            ],
            curious: [
                "Apa yang akan kamu lakukan jika jatuh cinta dengan orang yang sudah taken?",
                "Bagaimana cara kamu handle ketika best friend dating your ex?",
                "Apa yang kamu lakukan ketika pasangan ultimatum kamu?",
                "Bagaimana cara kamu respond ketika pasangan propose tapi kamu belum ready?",
                "Apa yang kamu lakukan ketika discover pasangan punya secret yang big?",
                "Bagaimana cara kamu handle ketika pasangan ga mau commit?",
                "Apa yang kamu lakukan ketika realize kamu dan pasangan want different things?",
                "Bagaimana cara kamu cope ketika pasangan choose career over relationship?",
                "Apa yang kamu lakukan ketika pasangan constantly compare kamu dengan others?",
                "Bagaimana cara kamu handle ketika love triangle situation?"
            ],
            nostalgic: [
                "Kalau bisa kembali ke masa lalu, apa yang akan kamu ubah dari hubungan sebelumnya?",
                "Apa regret terbesar kamu dalam hal cinta?",
                "Siapa 'the one that got away' dan apa ceritanya?",
                "Apa mistake terbesar yang pernah kamu buat dalam relationship?",
                "Kalau bisa minta maaf ke ex, apa yang akan kamu katakan?",
                "Apa opportunity cinta yang kamu sia-siakan dan masih nyesel?",
                "Siapa yang pernah break your heart paling parah?",
                "Apa 'what if' scenario yang masih haunting kamu?",
                "Kalau bisa undo satu relationship decision, apa yang kamu pilih?",
                "Apa lesson painful yang kamu dapat dari love yang unrequited?"
            ],
            adventurous: [
                "Apakah kamu percaya dengan konsep soulmate atau cinta itu pilihan?",
                "Kalau harus memilih antara passionate love yang unstable atau comfortable love yang predictable?",
                "Apakah kamu rela sacrifice everything demi true love?",
                "Kalau bisa tau future relationship kamu, kamu mau tau atau prefer surprise?",
                "Apakah kamu believe in love at first sight atau itu cuma attraction?",
                "Kalau harus choose between love dan personal dreams, kamu pilih mana?",
                "Apakah kamu rela love someone yang punya terminal illness?",
                "Kalau bisa guarantee one thing dalam love life, apa yang kamu pilih?",
                "Apakah kamu percaya kalau some people destined to be alone?",
                "Kalau love require kamu jadi completely different person, kamu mau?"
            ]
        }
    },

    career: {
        easy: {
            happy: [
                "Apa hal yang paling kamu suka dari pekerjaan/sekolah kamu?",
                "Prestasi apa yang paling kamu banggain?",
                "Siapa mentor atau guru yang paling inspire kamu?",
                "Apa skill yang baru kamu master dan bikin kamu proud?",
                "Moment apa yang bikin kamu realize 'ini passion gue'?",
                "Apa project yang paling fun pernah kamu kerjakan?",
                "Siapa colleague atau teman sekelas yang paling supportive?",
                "Apa achievement kecil yang bikin kamu happy hari ini?",
                "Bagaimana perasaan kamu waktu pertama kali dapat salary/uang saku?",
                "Apa compliment terbaik yang pernah kamu terima soal work/study?"
            ],
            thoughtful: [
                "Apa yang memotivasi kamu untuk bekerja keras?",
                "Nilai apa yang paling penting dalam karir menurutmu?",
                "Bagaimana cara kamu define success?",
                "Apa legacy yang pengen kamu tinggalkan melalui work kamu?",
                "Bagaimana work/study membentuk karakter kamu?",
                "Apa purpose yang kamu cari dalam career?",
                "Bagaimana cara kamu stay motivated ketika facing challenges?",
                "Apa impact yang pengen kamu buat melalui profession kamu?",
                "Bagaimana cara kamu measure personal growth?",
                "Apa principle yang kamu pegang dalam professional life?"
            ],
            curious: [
                "Skill apa yang lagi kamu pelajari sekarang?",
                "Profesi apa yang paling kamu kagumi?",
                "Apa trend industry yang lagi kamu follow?",
                "Bagaimana cara kamu stay updated dengan perkembangan field kamu?",
                "Apa tools atau technology baru yang pengen kamu explore?",
                "Siapa professional yang jadi role model kamu?",
                "Apa course atau training yang pengen kamu ambil?",
                "Bagaimana cara kamu network dalam industry?",
                "Apa conference atau event yang pengen kamu attend?",
                "Skill apa yang menurutmu bakal penting di masa depan?"
            ],
            nostalgic: [
                "Apa cita-cita kamu waktu kecil dulu?",
                "Siapa role model karir kamu?",
                "Apa subject favorit kamu waktu sekolah?",
                "Cerita tentang teacher yang paling berpengaruh!",
                "Apa first job atau part-time pertama kamu?",
                "Moment apa yang bikin kamu interested sama field ini?",
                "Apa advice career terbaik yang pernah kamu dapat?",
                "Siapa yang pertama kali believe in potential kamu?",
                "Apa buku atau film yang inspire career choice kamu?",
                "Cerita tentang interview pertama yang memorable!"
            ],
            adventurous: [
                "Kalau uang bukan masalah, pekerjaan apa yang ingin kamu lakukan?",
                "Negara mana yang ingin kamu datangi untuk bekerja?",
                "Apa side hustle yang pengen kamu coba?",
                "Kalau bisa switch career completely, kamu mau jadi apa?",
                "Apa business idea yang pernah terlintas di pikiran kamu?",
                "Kalau bisa work from anywhere, kamu pilih dimana?",
                "Apa project passion yang pengen kamu pursue?",
                "Kalau bisa collaborate dengan company manapun, pilih mana?",
                "Apa innovation yang pengen kamu contribute ke dunia?",
                "Kalau bisa create your own job title, apa yang kamu pilih?"
            ]
        },
        medium: {
            happy: [
                "Apa definisi sukses menurutmu?",
                "Bagaimana cara kamu celebrate professional milestones?",
                "Apa yang bikin kamu excited bangun pagi buat work/study?",
                "Siapa yang paling support journey career kamu?",
                "Apa positive change yang kamu buat di workplace/school?",
                "Bagaimana cara kamu contribute ke team atau community?",
                "Apa feedback positif yang paling meaningful buat kamu?",
                "Bagaimana cara kamu help others dalam professional setting?",
                "Apa tradition atau culture di workplace/school yang kamu suka?",
                "Moment apa yang bikin kamu feel valued professionally?"
            ],
            thoughtful: [
                "Bagaimana cara kamu menyeimbangkan work-life balance?",
                "Apa yang lebih penting: passion atau financial stability?",
                "Bagaimana cara kamu handle professional disappointment?",
                "Apa sacrifice yang rela kamu buat demi career goals?",
                "Bagaimana cara kamu maintain integrity dalam competitive environment?",
                "Apa yang kamu lakukan ketika passion dan reality ga match?",
                "Bagaimana cara kamu deal dengan imposter syndrome?",
                "Apa role money dalam career satisfaction menurutmu?",
                "Bagaimana cara kamu stay authentic dalam professional world?",
                "Apa yang kamu prioritaskan: growth atau stability?"
            ],
            curious: [
                "Apa tantangan terbesar di bidang yang kamu tekuni?",
                "Bagaimana cara kamu mengatasi burnout?",
                "Apa skill yang paling underrated tapi important?",
                "Bagaimana cara kamu adapt dengan perubahan industry?",
                "Apa mistake yang paling banyak orang buat di field kamu?",
                "Bagaimana cara kamu build personal brand?",
                "Apa yang kamu wish kamu tau sebelum start career ini?",
                "Bagaimana cara kamu handle difficult colleagues atau clients?",
                "Apa strategy kamu buat continuous learning?",
                "Bagaimana cara kamu prepare untuk future of work?"
            ],
            nostalgic: [
                "Kapan pertama kali kamu merasa 'ini passion gue'?",
                "Apa nasihat karir terbaik yang pernah kamu terima?",
                "Siapa mentor yang paling berpengaruh dalam journey kamu?",
                "Apa turning point terbesar dalam career path kamu?",
                "Cerita tentang first big break atau opportunity!",
                "Apa lesson terbesar yang kamu dapat dari failure?",
                "Siapa yang paling believe in kamu ketika others doubt?",
                "Apa moment yang bikin kamu realize kamu di right path?",
                "Cerita tentang project yang challenging tapi rewarding!",
                "Apa tradition atau value dari family yang influence career choice?"
            ],
            adventurous: [
                "Kalau bisa memulai startup, produk apa yang akan kamu buat?",
                "Apa impian bisnis tergila yang pernah kamu pikirkan?",
                "Kalau bisa work dengan any team di dunia, team mana yang dipilih?",
                "Apa industry yang pengen kamu disrupt?",
                "Kalau bisa solve one problem di dunia through work, apa yang dipilih?",
                "Apa unconventional career path yang menarik buat kamu?",
                "Kalau bisa create course atau workshop, topik apa yang dipilih?",
                "Apa social enterprise yang pengen kamu start?",
                "Kalau bisa work in any era, kapan yang kamu pilih?",
                "Apa legacy professional yang pengen kamu tinggalkan?"
            ]
        },
        hard: {
            thoughtful: [
                "Apakah kamu rela mengorbankan hubungan personal demi karir? Kenapa?",
                "Bagaimana cara kamu menghadapi kegagalan besar dalam karir?",
                "Apa yang akan kamu lakukan jika discover passion kamu ga bisa sustain financially?",
                "Bagaimana cara kamu handle ketika stuck di job yang toxic tapi butuh money?",
                "Apa yang kamu lakukan ketika realize kamu di wrong career path?",
                "Bagaimana cara kamu cope dengan professional jealousy?",
                "Apa yang kamu lakukan ketika values kamu conflict dengan company values?",
                "Bagaimana cara kamu handle ageism atau discrimination di workplace?",
                "Apa yang kamu lakukan ketika mentor atau role model disappoint kamu?",
                "Bagaimana cara kamu rebuild career setelah major setback?"
            ],
            curious: [
                "Apa yang akan kamu lakukan jika harus memilih antara integritas dan kesempatan emas?",
                "Bagaimana cara kamu handle ketika junior colleague outperform kamu?",
                "Apa yang kamu lakukan ketika boss atau teacher unfairly treat kamu?",
                "Bagaimana cara kamu respond ketika asked to do something unethical?",
                "Apa yang kamu lakukan ketika team credit kamu buat someone else's success?",
                "Bagaimana cara kamu handle ketika automation threaten your job?",
                "Apa yang kamu lakukan ketika realize kamu plateau dalam career?",
                "Bagaimana cara kamu cope dengan constant rejection?",
                "Apa yang kamu lakukan ketika industry kamu declining?",
                "Bagaimana cara kamu handle ketika work passion become just job?"
            ],
            nostalgic: [
                "Keputusan karir apa yang paling kamu sesali?",
                "Kalau bisa mengulang perjalanan karir, apa yang akan kamu ubah?",
                "Apa opportunity yang kamu sia-siakan dan masih nyesel?",
                "Siapa yang pernah underestimate kamu dan gimana perasaan kamu?",
                "Apa mistake terbesar yang pernah kamu buat professionally?",
                "Kalau bisa minta maaf ke someone yang kamu wrong professionally, siapa?",
                "Apa dream job yang kamu abandon dan masih wondering 'what if'?",
                "Siapa mentor yang disappoint kamu dan gimana impact-nya?",
                "Apa phase career yang paling dark dan gimana kamu survive?",
                "Kalau bisa give advice ke younger professional self, apa yang kamu bilang?"
            ],
            adventurous: [
                "Apakah kamu berani resign dari zona nyaman untuk mengejar mimpi yang belum pasti?",
                "Kalau harus choose between stable career dan revolutionary idea, pilih mana?",
                "Apakah kamu rela start from zero di age 40+ untuk pursue true passion?",
                "Kalau bisa guarantee success tapi harus sacrifice 10 years, kamu mau?",
                "Apakah kamu berani take huge financial risk untuk business venture?",
                "Kalau harus move to completely different country untuk dream job, kamu mau?",
                "Apakah kamu rela work for free untuk gain experience di dream company?",
                "Kalau bisa choose between being employee atau entrepreneur, pilih mana?",
                "Apakah kamu berani challenge industry standard yang udah established?",
                "Kalau success require kamu jadi completely different person professionally, kamu mau?"
            ]
        }
    }
};

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionDatabase;
} 