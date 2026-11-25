// =========================================================================
// 1. BMW AVTOMOBILLAR BAZASI (DOLZARB MODELLAR, M, ELECTRIC, HISTORIC)
// =========================================================================
const BMW_MODELS = [
    // --- BMW SEDAN ---
    {
        id: 'bmw-1-series',
        name: 'BMW 1 Series',
        category: 'sedan',
        isHistoric: false,
        year: 2025,
        price: 39500,
        engineType: '1.5L TwinPower Turbo 3-silindr (Mild-Hybrid)',
        displacement: '1,499 cc',
        hp: 170,
        torque: '280 Nm',
        topSpeed: '226 km/h',
        accel: '7.8 s',
        transmission: '7-pog\'onli Steptronic avtomat',
        fuelType: 'Benzin',
        fuelConsumption: '5.5 L / 100 km',
        dimensions: '4,361 x 1,800 x 1,459 mm',
        trunk: '380 L',
        exterior: 'Dinamik kuzov chiziqlari, LED faralar va sport radiator panjarasi.',
        interior: 'BMW Curved Display, sport o\'rindiqlar va zamonaviy markaziy konsol.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Parking Assistant'],
        safety: ['Active Guard', 'Lane Departure Warning', '6 ta xavfsizlik yostiqchasi'],
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-2-gc',
        name: 'BMW 2 Series Gran Coupe',
        category: 'sedan',
        isHistoric: false,
        year: 2025,
        price: 41200,
        engineType: '2.0L TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 241,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '6.1 s',
        transmission: '7-pog\'onli Steptronic Dual-Clutch',
        fuelType: 'Benzin',
        fuelConsumption: '6.4 L / 100 km',
        dimensions: '4,546 x 1,800 x 1,445 mm',
        trunk: '430 L',
        exterior: 'Ramkasiz yon oynalar, kupe uslubidagi tom qiyalik chizig\'i va LED optika.',
        interior: 'Haydovchiga yo\'naltirilgan kokpit, BMW Live Cockpit Plus va yuqori sifatli bezak.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW ConnectedDrive'],
        safety: ['Frontal to\'qnashuv ogohlantirishi', 'Ko\'r zonalar nazorati', 'Kruiz-kontrol'],
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-3-series',
        name: 'BMW 3 Series (330i)',
        category: 'sedan',
        isHistoric: false,
        year: 2026,
        price: 45900,
        engineType: '2.0L TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '5.6 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '6.6 L / 100 km',
        dimensions: '4,713 x 1,827 x 1,442 mm',
        trunk: '480 L',
        exterior: '50:50 og\'irlik taqsimoti, aniq aerodinamik profil va adaptiv LED faralar.',
        interior: 'BMW Operating System 8.5, 14.9 dyuymli markaziy ekran va Vernasca charm.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW Intelligent Personal Assistant'],
        safety: ['Driving Assistant Professional', 'Parking Assistant', 'Dynamic Stability Control'],
        image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-5-series',
        name: 'BMW 5 Series (530i)',
        category: 'sedan',
        isHistoric: false,
        year: 2026,
        price: 58900,
        engineType: '2.0L TwinPower Turbo 48V Mild-Hybrid',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '5.9 s',
        transmission: '8-pog\'onli Steptronic avtomat',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '6.2 L / 100 km',
        dimensions: '5,060 x 1,900 x 1,515 mm',
        trunk: '520 L',
        exterior: 'Biznes-klass nafisligi, BMW Iconic Glow yorituvchi panjara va keng g\'ildirak bazasi.',
        interior: 'BMW Interaction Bar, panoramik shisha tom va keng orqa qator qulayligi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW Driving Assistant'],
        safety: ['Highway Assistant', 'Active Blind Spot Detection', 'Kengaytirilgan tormoz tizimi'],
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-7-series',
        name: 'BMW 7 Series (740i)',
        category: 'sedan',
        isHistoric: false,
        year: 2026,
        price: 97300,
        engineType: '3.0L TwinPower Turbo 6-silindr Mild-Hybrid',
        displacement: '2,998 cc',
        hp: 375,
        torque: '540 Nm',
        topSpeed: '250 km/h',
        accel: '5.2 s',
        transmission: '8-pog\'onli Steptronic avtomat',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '7.5 L / 100 km',
        dimensions: '5,391 x 1,950 x 1,544 mm',
        trunk: '540 L',
        exterior: 'Hashamatli flagman sedan, ikki qavatli faralar va kristall akssentli dizayn.',
        interior: 'Executive Lounge o\'rindiqlari, 31.3 dyuymli BMW Theatre Screen (opsiya) va Merino charmi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW Gesture Control'],
        safety: ['Driving Assistant Professional', 'Parking Assistant Professional', 'Adaptive Air Suspension'],
        image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-8-gc',
        name: 'BMW 8 Series Gran Coupe',
        category: 'sedan',
        isHistoric: false,
        year: 2025,
        price: 91900,
        engineType: '3.0L TwinPower Turbo 6-silindr',
        displacement: '2,998 cc',
        hp: 335,
        torque: '500 Nm',
        topSpeed: '250 km/h',
        accel: '4.9 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '7.8 L / 100 km',
        dimensions: '5,082 x 1,932 x 1,407 mm',
        trunk: '440 L',
        exterior: 'Past va keng Gran Turismo silueti, Laserlight/LED optika va sport chiqarish uchlari.',
        interior: 'Harman Kardon audio, ko\'p funksiyali sport o\'rindiqlar va xrustal vites dastagi.',
        technologies: ['BMW iDrive', 'BMW Head-Up Display', 'BMW ConnectedDrive'],
        safety: ['Active Protection', 'Lane Keeping Assistant', 'Surround View kamera'],
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },

    // --- BMW SUV (X SERIES) ---
    {
        id: 'bmw-x1',
        name: 'BMW X1 xDrive28i',
        category: 'suv',
        isHistoric: false,
        year: 2025,
        price: 41300,
        engineType: '2.0L TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 241,
        torque: '400 Nm',
        topSpeed: '236 km/h',
        accel: '6.2 s',
        transmission: '7-pog\'onli Steptronic Dual-Clutch',
        fuelType: 'Benzin',
        fuelConsumption: '6.8 L / 100 km',
        dimensions: '4,500 x 1,845 x 1,642 mm',
        trunk: '540 L',
        exterior: 'Ixcham va dadil SAV (Sports Activity Vehicle) ko\'rinishi.',
        interior: 'Suzuvchi markaziy qo\'l qo\'ygich, BMW Curved Display va keng yukxona.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive'],
        safety: ['Active Guard', 'Parking Assistant', 'Hill Descent Control'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x2',
        name: 'BMW X2 M35i xDrive',
        category: 'suv',
        isHistoric: false,
        year: 2025,
        price: 51400,
        engineType: '2.0L M TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 312,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '5.2 s',
        transmission: '7-pog\'onli M Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '7.5 L / 100 km',
        dimensions: '4,554 x 1,845 x 1,560 mm',
        trunk: '560 L',
        exterior: 'Kupe-krossover uslubidagi keskin orqa tom chizig\'i va M sport detallari.',
        interior: 'M sport o\'rindiqlar, M rul va zamonaviy raqamli panel.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive'],
        safety: ['Driving Assistant', 'Adaptive M Suspension', 'Front Collision Warning'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x3',
        name: 'BMW X3 xDrive30',
        category: 'suv',
        isHistoric: false,
        year: 2025,
        price: 49500,
        engineType: '2.0L TwinPower Turbo 48V Mild-Hybrid',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '240 km/h',
        accel: '6.0 s',
        transmission: '8-pog\'onli Steptronic avtomat',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '7.1 L / 100 km',
        dimensions: '4,755 x 1,920 x 1,660 mm',
        trunk: '570 L',
        exterior: 'Zamonaviy SAV proporsiyalari, yoritiladigan radiator panjarasi va sport elementlar.',
        interior: 'BMW Curved Display, qulay salon va amaliy bagaj bo\'lmasi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['Driving Assistant', 'Parking Assistant', 'Dynamic Traction Control'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x4',
        name: 'BMW X4 xDrive30i',
        category: 'suv',
        isHistoric: false,
        year: 2024,
        price: 55300,
        engineType: '2.0L TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 248,
        torque: '350 Nm',
        topSpeed: '240 km/h',
        accel: '6.0 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '7.6 L / 100 km',
        dimensions: '4,752 x 1,918 x 1,621 mm',
        trunk: '525 L',
        exterior: 'Sports Activity Coupe silueti, atletik g\'ildirak arkalari va 3D LED chiroqlar.',
        interior: 'Sport o\'rindiqlar, aniq analog-raqamli uyg\'unlik va mustahkam konstruksiya.',
        technologies: ['BMW iDrive', 'BMW xDrive', 'BMW TwinPower Turbo'],
        safety: ['Active Driving Assistant', 'Park Distance Control', 'Cornering Brake Control'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x5',
        name: 'BMW X5 xDrive40i',
        category: 'suv',
        isHistoric: false,
        year: 2026,
        price: 66300,
        engineType: '3.0L TwinPower Turbo 6-silindr Mild-Hybrid',
        displacement: '2,998 cc',
        hp: 375,
        torque: '540 Nm',
        topSpeed: '243 km/h',
        accel: '5.3 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '8.5 L / 100 km',
        dimensions: '4,935 x 2,004 x 1,765 mm',
        trunk: '650 L',
        exterior: 'Mustahkam SAV ko\'rinishi, keng g\'ildiraklar va ikki qismli elektr yukxona eshigi.',
        interior: 'BMW Curved Display, Sensafin/Merino qoplamalar va keng ichki makon.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['Active Driving Assistant', 'Parking Assistant', 'xOffroad Package'],
        image: 'image_agent_tag_9233442398636447332',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x6',
        name: 'BMW X6 xDrive40i',
        category: 'suv',
        isHistoric: false,
        year: 2026,
        price: 74700,
        engineType: '3.0L TwinPower Turbo 6-silindr Mild-Hybrid',
        displacement: '2,998 cc',
        hp: 375,
        torque: '540 Nm',
        topSpeed: '250 km/h',
        accel: '5.2 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '8.7 L / 100 km',
        dimensions: '4,960 x 2,004 x 1,700 mm',
        trunk: '580 L',
        exterior: 'Kupe-SAV dinamikasi, agressiv old bamper va panoramik yulduzsimon osmon (opsiya).',
        interior: 'Sport kokpit, BMW Curved Display va yuqori darajadagi shovqin izolyatsiyasi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Intelligent Personal Assistant'],
        safety: ['Driving Assistant', 'Parking Assistant', 'Dynamic Stability Control'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x7',
        name: 'BMW X7 xDrive40i',
        category: 'suv',
        isHistoric: false,
        year: 2026,
        price: 84300,
        engineType: '3.0L TwinPower Turbo 6-silindr Mild-Hybrid',
        displacement: '2,998 cc',
        hp: 375,
        torque: '540 Nm',
        topSpeed: '250 km/h',
        accel: '5.6 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '9.2 L / 100 km',
        dimensions: '5,181 x 2,000 x 1,835 mm',
        trunk: '326 L (3 qatorli) / 750 L (2 qatorli)',
        exterior: 'Eng yirik BMW SAV flagmani, 3 qatorli o\'rindiqlar va hashamatli proporsiyalar.',
        interior: '6 yoki 7 o\'rinli konfiguratsiya, 2-axle pnevmatik suspenziya va Sky Lounge panoramik tom.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['Driving Assistant Professional', 'Parking Assistant Professional', 'Roll Stabilization'],
        image: 'image_agent_tag_9233442398636447332',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-xm',
        name: 'BMW XM',
        category: 'suv',
        isHistoric: false,
        year: 2025,
        price: 159000,
        engineType: '4.4L M TwinPower Turbo V8 + Elektromotor (Plug-in Hybrid)',
        displacement: '4,395 cc',
        hp: 644,
        torque: '800 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 270 km/h)',
        accel: '4.1 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Plug-in Hybrid (Benzin + Elektr)',
        fuelConsumption: '1.6 L / 100 km (WLTP aralash)',
        dimensions: '5,110 x 2,005 x 1,755 mm',
        trunk: '527 L',
        exterior: 'Mustaqil BMW M yuqori unumdor SAV, oltin/qora akssentlar va vertikal chiqarish quvurlari.',
        interior: '3D prizmatik shiftli shift, Vintage charm va M Lounge orqa o\'rindiqlari.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['Active M Differential', 'Integral Active Steering', 'Driving Assistant Professional'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },

    // --- BMW M SERIES ---
    {
        id: 'bmw-m2',
        name: 'BMW M2 Coupe',
        category: 'm-series',
        isHistoric: false,
        year: 2025,
        price: 65500,
        engineType: '3.0L M TwinPower Turbo 6-silindr (S58)',
        displacement: '2,993 cc',
        hp: 473,
        torque: '550 Nm (avtomatda 600 Nm)',
        topSpeed: '250 km/h (M Driver\'s Package bilan 285 km/h)',
        accel: '3.9 s',
        transmission: '6-pog\'onli mexanik yoki 8-pog\'onli M Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '9.6 L / 100 km',
        dimensions: '4,580 x 1,887 x 1,403 mm',
        trunk: '390 L',
        exterior: 'Kengaytirilgan qanotlar, M diffuzor va ixcham sport kupe dinamikasi.',
        interior: 'M Sport o\'rindiqlar, M Drift Analyzer va BMW Curved Display.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW TwinPower Turbo'],
        safety: ['M Compound tormozlar', 'Active M Differential', 'M Traction Control'],
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-m3',
        name: 'BMW M3 Competition xDrive',
        category: 'm-series',
        isHistoric: false,
        year: 2026,
        price: 86000,
        engineType: '3.0L M TwinPower Turbo 6-silindr (S58)',
        displacement: '2,993 cc',
        hp: 523,
        torque: '650 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 290 km/h)',
        accel: '3.4 s',
        transmission: '8-pog\'onli M Steptronic (Drivelogic)',
        fuelType: 'Benzin',
        fuelConsumption: '10.0 L / 100 km',
        dimensions: '4,801 x 1,903 x 1,435 mm',
        trunk: '480 L',
        exterior: 'Vertikal M panjara, karbon tom va to\'rt quvurli M sport chiqarish tizimi.',
        interior: 'M Carbon bucket o\'rindiqlar (opsiya), M Setup menyusi va trek telemetriyasi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW TwinPower Turbo'],
        safety: ['M xDrive (4WD/4WD Sport/2WD)', 'M Compound/Carbon-Ceramic tormozlar', 'DSC'],
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-m4',
        name: 'BMW M4 Competition xDrive Coupe',
        category: 'm-series',
        isHistoric: false,
        year: 2026,
        price: 88800,
        engineType: '3.0L M TwinPower Turbo 6-silindr (S58)',
        displacement: '2,993 cc',
        hp: 523,
        torque: '650 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 290 km/h)',
        accel: '3.4 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '10.0 L / 100 km',
        dimensions: '4,801 x 1,887 x 1,392 mm',
        trunk: '440 L',
        exterior: 'Agressiv kupe aerodinamikasi, Laser/LED yorug\'lik elementlari va M g\'ildirak disklari.',
        interior: 'Sport kokpit, M ko\'p funksiyali rul va yuqori aniqlikdagi boshqaruv.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW TwinPower Turbo'],
        safety: ['M xDrive', 'Active M Differential', 'M Traction Control'],
        image: 'image_agent_tag_9233442398636446274',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-m5',
        name: 'BMW M5 Sedan (G90)',
        category: 'm-series',
        isHistoric: false,
        year: 2025,
        price: 119500,
        engineType: '4.4L M TwinPower Turbo V8 + Elektromotor (M Hybrid)',
        displacement: '4,395 cc',
        hp: 717,
        torque: '1,000 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 305 km/h)',
        accel: '3.4 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Plug-in Hybrid (Benzin + Elektr)',
        fuelConsumption: '1.7 L / 100 km (WLTP aralash)',
        dimensions: '5,096 x 1,970 x 1,510 mm',
        trunk: '466 L',
        exterior: 'Kengaytirilgan M bamperlar, karbon detallar va hashamatli-sportiv biznes sedan.',
        interior: 'M ko\'p funksiyali o\'rindiqlar, BMW Curved Display va M Hybrid rejim boshqaruvi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW ConnectedDrive'],
        safety: ['M xDrive', 'Active M Differential', 'Driving Assistant Professional'],
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-m8',
        name: 'BMW M8 Competition Coupe',
        category: 'm-series',
        isHistoric: false,
        year: 2025,
        price: 138800,
        engineType: '4.4L M TwinPower Turbo V8 (S63)',
        displacement: '4,395 cc',
        hp: 617,
        torque: '750 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 305 km/h)',
        accel: '3.0 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '11.3 L / 100 km',
        dimensions: '4,873 x 1,907 x 1,359 mm',
        trunk: '420 L',
        exterior: 'Grand Tourer flagman sport kupe, karbon tom va yuqori bosimli M aerodinamika.',
        interior: 'To\'liq Merino charm, Bowers & Wilkins audio va M rejim tugmalari.',
        technologies: ['BMW iDrive', 'BMW Head-Up Display', 'BMW TwinPower Turbo'],
        safety: ['M xDrive', 'Active M Differential', 'M Carbon Ceramic tormozlar (opsiya)'],
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x5-m',
        name: 'BMW X5 M Competition',
        category: 'm-series',
        isHistoric: false,
        year: 2025,
        price: 129700,
        engineType: '4.4L M TwinPower Turbo V8 Mild-Hybrid (S68)',
        displacement: '4,395 cc',
        hp: 617,
        torque: '750 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 285 km/h)',
        accel: '3.7 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '12.9 L / 100 km',
        dimensions: '4,948 x 2,015 x 1,756 mm',
        trunk: '650 L',
        exterior: 'M sportiv SAV, qora yaltiroq aksentlar va mustahkam M suspenziya.',
        interior: 'M sport o\'rindiqlar, BMW Curved Display va yuqori darajadagi qulaylik.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['Active M Differential', 'M xDrive', 'Driving Assistant'],
        image: 'image_agent_tag_9233442398636447332',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-x6-m',
        name: 'BMW X6 M Competition',
        category: 'm-series',
        isHistoric: false,
        year: 2025,
        price: 134100,
        engineType: '4.4L M TwinPower Turbo V8 Mild-Hybrid (S68)',
        displacement: '4,395 cc',
        hp: 617,
        torque: '750 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 285 km/h)',
        accel: '3.7 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '12.7 L / 100 km',
        dimensions: '4,966 x 2,019 x 1,697 mm',
        trunk: '580 L',
        exterior: 'Kupe-SAV sport flagmani, keskin M bamper va aerodinamik spoyler.',
        interior: 'M kokpit, kengaytirilgan charm bezak va aniq boshqaruv interfeysi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['M xDrive', 'Active M Differential', 'Parking Assistant'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-xm-label',
        name: 'BMW XM Label',
        category: 'm-series',
        isHistoric: false,
        year: 2025,
        price: 185000,
        engineType: '4.4L M TwinPower Turbo V8 + Elektromotor',
        displacement: '4,395 cc',
        hp: 738,
        torque: '1,000 Nm',
        topSpeed: '250 km/h (M Driver\'s Package bilan 290 km/h)',
        accel: '3.7 s',
        transmission: '8-pog\'onli M Steptronic',
        fuelType: 'Plug-in Hybrid (Benzin + Elektr)',
        fuelConsumption: '1.7 L / 100 km (WLTP aralash)',
        dimensions: '5,110 x 2,005 x 1,755 mm',
        trunk: '527 L',
        exterior: 'Eng kuchli seriyali BMW M modeli, maxsus qizil/qora akssentlar.',
        interior: 'Eksklyuziv M Label bezagi, keng orqa salon va raqamli tizimlar.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['M xDrive', 'Integral Active Steering', 'Driving Assistant Professional'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },

    // --- BMW ELECTRIC (i SERIES) ---
    {
        id: 'bmw-i4',
        name: 'BMW i4 eDrive40',
        category: 'electric',
        isHistoric: false,
        year: 2025,
        price: 57900,
        engineType: '5th Gen BMW eDrive elektromotor (orqa uzatma)',
        displacement: 'Elektr (0 cc)',
        hp: 335,
        torque: '430 Nm',
        topSpeed: '190 km/h (cheklangan)',
        accel: '5.5 s',
        transmission: '1-pog\'onli avtomatik reduktor',
        fuelType: 'To\'liq elektr (BEV)',
        fuelConsumption: '16.1 – 19.1 kWh / 100 km',
        batteryCapacity: '83.9 kWh (brutto) / 80.7 kWh (foydali)',
        rangeKm: '483 km (EPA) / gacha 590 km (WLTP)',
        chargeTime: 'DC 205 kW da 10–80% ~31 daqiqa',
        motorSpecs: 'Sinxron elektromotor (nadir yer magnitlarisiz), 335 HP / 430 Nm',
        dimensions: '4,783 x 1,852 x 1,448 mm',
        trunk: '470 L',
        exterior: 'Aerodinamik Gran Coupe kuzovi, yopiq radiator panjarasi va ko\'k akssentlar.',
        interior: 'BMW Curved Display, qulay 4 eshikli salon va liftback bagaj.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Intelligent Personal Assistant', 'BMW ConnectedDrive'],
        safety: ['Active Guard Plus', 'Parking Assistant', 'Dynamic Stability Control'],
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-i5',
        name: 'BMW i5 eDrive40',
        category: 'electric',
        isHistoric: false,
        year: 2025,
        price: 67100,
        engineType: '5th Gen BMW eDrive elektromotor',
        displacement: 'Elektr (0 cc)',
        hp: 335,
        torque: '400 Nm (Sport Boost bilan 430 Nm)',
        topSpeed: '193 km/h',
        accel: '5.7 s',
        transmission: '1-pog\'onli avtomatik reduktor',
        fuelType: 'To\'liq elektr (BEV)',
        fuelConsumption: '15.9 – 18.9 kWh / 100 km',
        batteryCapacity: '84.3 kWh (foydali ~81.2 kWh)',
        rangeKm: '475 km (EPA) / gacha 582 km (WLTP)',
        chargeTime: 'DC 205 kW da 10–80% ~30 daqiqa',
        motorSpecs: 'BMW eDrive elektromotor, 335 HP',
        dimensions: '5,060 x 1,900 x 1,515 mm',
        trunk: '490 L',
        exterior: '5 Series biznes-sedani bilan uyg\'unlashgan zamonaviy elektr dizayn.',
        interior: 'BMW Interaction Bar, Curved Display va yuqori darajadagi sokinlik.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW Driving Assistant'],
        safety: ['Highway Assistant', 'Active Blind Spot Detection', 'Adaptive Brake Assist'],
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-i7',
        name: 'BMW i7 xDrive60',
        category: 'electric',
        isHistoric: false,
        year: 2025,
        price: 128300,
        engineType: 'Ikki motorli BMW eDrive (xDrive)',
        displacement: 'Elektr (0 cc)',
        hp: 536,
        torque: '745 Nm',
        topSpeed: '240 km/h',
        accel: '4.5 s',
        transmission: '1-pog\'onli avtomatik reduktor',
        fuelType: 'To\'liq elektr (BEV)',
        fuelConsumption: '18.4 – 19.6 kWh / 100 km',
        batteryCapacity: '105.7 kWh (foydali 101.7 kWh)',
        rangeKm: '512 km (EPA) / gacha 625 km (WLTP)',
        chargeTime: 'DC 195 kW da 10–80% ~34 daqiqa',
        motorSpecs: 'Old va orqa o\'qda 2 ta elektromotor, jami 536 HP / 745 Nm',
        dimensions: '5,391 x 1,950 x 1,544 mm',
        trunk: '500 L',
        exterior: 'Hashamatli elektr flagman sedan, ifodali old qism va aerodinamik g\'ildiraklar.',
        interior: 'Executive Lounge, panoramik shisha tom va premium akustika.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW Gesture Control'],
        safety: ['Driving Assistant Professional', 'Parking Assistant Professional', '2-axle Air Suspension'],
        image: 'image_agent_tag_9233442398636447793',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-ix',
        name: 'BMW iX xDrive50',
        category: 'electric',
        isHistoric: false,
        year: 2025,
        price: 87250,
        engineType: 'Ikki motorli 5th Gen BMW eDrive (xDrive)',
        displacement: 'Elektr (0 cc)',
        hp: 516,
        torque: '765 Nm',
        topSpeed: '200 km/h',
        accel: '4.4 s',
        transmission: '1-pog\'onli avtomatik reduktor',
        fuelType: 'To\'liq elektr (BEV)',
        fuelConsumption: '19.8 – 23.0 kWh / 100 km',
        batteryCapacity: '111.5 kWh (foydali ~105.2 kWh)',
        rangeKm: '497 km (EPA) / gacha 630 km (WLTP)',
        chargeTime: 'DC 195 kW da 10–80% ~35 daqiqa',
        motorSpecs: 'Ikki elektromotor (old + orqa), 516 HP / 765 Nm',
        dimensions: '4,953 x 1,967 x 1,695 mm',
        trunk: '500 L',
        exterior: 'Minimalistik va futuristik elektr SAV kuzovi, past qarshilik koeffitsienti (0.25 Cd).',
        interior: 'Keng "lounge" salon, olti burchakli rul va Shy Tech yashirin boshqaruvlar.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display', 'BMW Intelligent Personal Assistant'],
        safety: ['Active Driving Assistant', 'Parking Assistant', 'Dynamic Stability Control'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-ix1',
        name: 'BMW iX1 xDrive30',
        category: 'electric',
        isHistoric: false,
        year: 2025,
        price: 50000,
        engineType: 'Ikki motorli BMW eDrive (xDrive)',
        displacement: 'Elektr (0 cc)',
        hp: 308,
        torque: '494 Nm',
        topSpeed: '180 km/h',
        accel: '5.6 s',
        transmission: '1-pog\'onli avtomatik reduktor',
        fuelType: 'To\'liq elektr (BEV)',
        fuelConsumption: '16.8 – 18.1 kWh / 100 km',
        batteryCapacity: '66.5 kWh (foydali 64.7 kWh)',
        rangeKm: '413 – 438 km (WLTP)',
        chargeTime: 'DC 130 kW da 10–80% ~29 daqiqa',
        motorSpecs: '2 ta elektromotor, umumiy quvvat 308 HP (230 kW) / 494 Nm',
        dimensions: '4,500 x 1,845 x 1,616 mm',
        trunk: '490 L',
        exterior: 'Ixcham elektr SAV, qisqa old va orqa osmalar hamda aniq yorug\'lik imzosi.',
        interior: 'BMW Curved Display, qulay o\'rindiqlar va kundalik foydalanishga mos salon.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive'],
        safety: ['Active Guard', 'Parking Assistant', 'Reversing Assistant'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-ix2',
        name: 'BMW iX2 xDrive30',
        category: 'electric',
        isHistoric: false,
        year: 2025,
        price: 56500,
        engineType: 'Ikki motorli BMW eDrive (xDrive)',
        displacement: 'Elektr (0 cc)',
        hp: 308,
        torque: '494 Nm',
        topSpeed: '180 km/h',
        accel: '5.6 s',
        transmission: '1-pog\'onli avtomatik reduktor',
        fuelType: 'To\'liq elektr (BEV)',
        fuelConsumption: '16.3 – 17.7 kWh / 100 km',
        batteryCapacity: '66.5 kWh (foydali 64.7 kWh)',
        rangeKm: '417 – 449 km (WLTP)',
        chargeTime: 'DC 130 kW da 10–80% ~29 daqiqa',
        motorSpecs: '2 ta elektromotor, 308 HP / 494 Nm',
        dimensions: '4,554 x 1,845 x 1,537 mm',
        trunk: '525 L',
        exterior: 'Sportiv elektr kupe-krossover, silliq tom chizig\'i va ifodali orqa qism.',
        interior: 'BMW Curved Display, zamonaviy materiallar va keng bagaj sig\'imi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW xDrive', 'BMW ConnectedDrive'],
        safety: ['Driving Assistant', 'Parking Assistant', 'Front Collision Warning'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
    },

    // --- BMW COUPE VA CONVERTIBLE ---
    {
        id: 'bmw-2-coupe',
        name: 'BMW 2 Series Coupe (230i)',
        category: 'coupe-convertible',
        isHistoric: false,
        year: 2025,
        price: 39300,
        engineType: '2.0L TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '5.5 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '6.8 L / 100 km',
        dimensions: '4,537 x 1,838 x 1,390 mm',
        trunk: '390 L',
        exterior: 'Klassik orqa g\'ildirakli sport kupe nisbatlari va keng g\'ildirak bazasi.',
        interior: 'Haydovchiga yo\'naltirilgan sport salon va aniq boshqaruv elementlari.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW TwinPower Turbo'],
        safety: ['Active Guard', 'Cruise Control with Braking', 'DSC'],
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-4-coupe',
        name: 'BMW 4 Series Coupe (430i)',
        category: 'coupe-convertible',
        isHistoric: false,
        year: 2025,
        price: 50700,
        engineType: '2.0L TwinPower Turbo 4-silindr Mild-Hybrid',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '5.6 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '6.7 L / 100 km',
        dimensions: '4,773 x 1,852 x 1,383 mm',
        trunk: '440 L',
        exterior: 'Past og\'irlik markazi, uzun kapot va ifodali old optika.',
        interior: 'BMW Curved Display, sport o\'rindiqlar va yuqori sifatli salon bezagi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW Head-Up Display'],
        safety: ['Active Driving Assistant', 'Lane Departure Warning', 'Dynamic Stability Control'],
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-4-convertible',
        name: 'BMW 4 Series Convertible (430i)',
        category: 'coupe-convertible',
        isHistoric: false,
        year: 2025,
        price: 58700,
        engineType: '2.0L TwinPower Turbo 4-silindr Mild-Hybrid',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '6.0 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin / Mild-Hybrid',
        fuelConsumption: '7.0 L / 100 km',
        dimensions: '4,773 x 1,852 x 1,384 mm',
        trunk: '300 L (tom ochiq) / 385 L (tom yopiq)',
        exterior: 'Yumshoq akustik tom 50 km/h gacha tezlikda 18 soniyada ochiladi va yopiladi.',
        interior: 'Ochiq havoda sayohat uchun mo\'ljallangan qulay o\'rindiqlar va iqlim boshqaruvi.',
        technologies: ['BMW iDrive', 'BMW Curved Display', 'BMW ConnectedDrive'],
        safety: ['Rollover Protection System', 'Active Driving Assistant', 'Parking Assistant'],
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-8-coupe',
        name: 'BMW 8 Series Coupe (M850i xDrive)',
        category: 'coupe-convertible',
        isHistoric: false,
        year: 2025,
        price: 106300,
        engineType: '4.4L TwinPower Turbo V8',
        displacement: '4,395 cc',
        hp: 523,
        torque: '750 Nm',
        topSpeed: '250 km/h',
        accel: '3.6 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '10.5 L / 100 km',
        dimensions: '4,851 x 1,902 x 1,346 mm',
        trunk: '420 L',
        exterior: 'Hashamatli sport kupe, past siluet va kuchli V8 dinamikasi.',
        interior: 'Merino charm, sportiv markaziy konsol va yuqori darajadagi qulaylik.',
        technologies: ['BMW iDrive', 'BMW xDrive', 'BMW Head-Up Display'],
        safety: ['Integral Active Steering', 'Active Driving Assistant', 'Surround View'],
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 'bmw-z4',
        name: 'BMW Z4 Roadster (sDrive30i)',
        category: 'coupe-convertible',
        isHistoric: false,
        year: 2025,
        price: 54000,
        engineType: '2.0L TwinPower Turbo 4-silindr',
        displacement: '1,998 cc',
        hp: 255,
        torque: '400 Nm',
        topSpeed: '250 km/h',
        accel: '5.4 s',
        transmission: '8-pog\'onli Sport Steptronic',
        fuelType: 'Benzin',
        fuelConsumption: '6.9 L / 100 km',
        dimensions: '4,324 x 1,864 x 1,304 mm',
        trunk: '281 L',
        exterior: '2 o\'rinli klassik rodster, elektr yumshoq tom va qisqa osmalar.',
        interior: 'Ixcham va sportiv 2 o\'rinli kokpit, markaziy ekran va shamol himoyasi.',
        technologies: ['BMW iDrive', 'BMW Head-Up Display', 'BMW TwinPower Turbo'],
        safety: ['Rollover Bars', 'Active Driving Assistant', 'M Sport Brakes (opsiya)'],
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    },

    // --- HISTORIC MODELS (ISHLAB CHIQARILISHI TUGAGAN TARIXIY MODELLAR) ---
    {
        id: 'hist-328',
        name: 'BMW 328 Roadster',
        category: 'historic',
        isHistoric: true,
        year: '1936–1940',
        price: 0,
        engineType: '2.0L 6-silindrli atmosfera dvigateli',
        displacement: '1,971 cc',
        hp: 80,
        torque: '126 Nm',
        topSpeed: '150 km/h',
        accel: '~11.5 s (davr ko\'rsatkichi)',
        transmission: '4-pog\'onli mexanik',
        fuelType: 'Benzin',
        fuelConsumption: '~10.5 L / 100 km',
        dimensions: '3,900 x 1,550 x 1,250 mm',
        trunk: 'Ixcham sport yukxona',
        exterior: 'Yengil trubkali shassi, past oynalar va poyga uchun yaratilgan klassik kuzov.',
        interior: 'Minimalistik analog asboblar paneli va sportiv o\'rindiqlar.',
        technologies: ['Hemispherical cylinder head dizayni', 'Yengil shassi muhandisligi'],
        safety: ['Davr standartidagi mexanik baraban tormozlar'],
        image: 'image_agent_tag_9233442398636448851',
        interiorImage: 'image_agent_tag_9233442398636448851'
    },
    {
        id: 'hist-507',
        name: 'BMW 507 Roadster',
        category: 'historic',
        isHistoric: true,
        year: '1956–1959',
        price: 0,
        engineType: '3.2L alyuminiy V8 dvigatel',
        displacement: '3,168 cc',
        hp: 150,
        torque: '235 Nm',
        topSpeed: '196–220 km/h (uzatma/tomga bog\'liq)',
        accel: '~8.8 s',
        transmission: '4-pog\'onli mexanik',
        fuelType: 'Benzin',
        fuelConsumption: '~15.0 L / 100 km',
        dimensions: '4,380 x 1,650 x 1,255 mm',
        trunk: 'Ixcham rodster yukxonasi',
        exterior: 'Albrecht Graf von Goertz dizaynidagi afsonaviy alyuminiy kuzovli rodster (252 dona ishlab chiqarilgan).',
        interior: 'Klassik charm o\'rindiqlar va markaziy o\'lchov asboblari.',
        technologies: ['Yengil alyuminiy V8 blok', 'Mustaqil old va orqa suspenziya'],
        safety: ['Old disk tormozlar (keyingi versiyalarda)'],
        image: 'image_agent_tag_9233442398636448851',
        interiorImage: 'image_agent_tag_9233442398636448851'
    },
    {
        id: 'hist-e30-m3',
        name: 'BMW M3 (E30)',
        category: 'historic',
        isHistoric: true,
        year: '1986–1991',
        price: 0,
        engineType: '2.3L–2.5L S14 4-silindrli 16-klapanli atmosfera',
        displacement: '2,302 cc (dastlabki versiya)',
        hp: 195,
        torque: '230 Nm',
        topSpeed: '235 km/h',
        accel: '6.7 s',
        transmission: '5-pog\'onli mexanik (Getrag)',
        fuelType: 'Benzin',
        fuelConsumption: '~8.9 L / 100 km',
        dimensions: '4,345 x 1,680 x 1,365 mm',
        trunk: '405 L',
        exterior: 'Kengaytirilgan qanotlar, maxsus C-ustun va motorsport aerodinamikasi.',
        interior: 'Sport o\'rindiqlar, aniq vites dastagi va haydovchiga yo\'naltirilgan salon.',
        technologies: ['BMW Motorsport S14 yuqori aylanishli dvigatel', 'Motorsport shassi sozlamalari'],
        safety: ['ABS (opsiya/versiyaga ko\'ra)', 'Mustahkamlangan kuzov tuzilmasi'],
        image: 'image_agent_tag_9233442398636448851',
        interiorImage: 'image_agent_tag_9233442398636448851'
    },
    {
        id: 'hist-i8',
        name: 'BMW i8 Coupe',
        category: 'historic',
        isHistoric: true,
        year: '2014–2020',
        price: 0,
        engineType: '1.5L 3-silindrli Turbo + Gibrid elektr tizimi (Plug-in Hybrid)',
        displacement: '1,499 cc + Elektr',
        hp: 369,
        torque: '570 Nm (kombinatsiyalangan)',
        topSpeed: '250 km/h',
        accel: '4.4 s',
        transmission: '6-pog\'onli avtomat (benzin) / 2-pog\'onli (elektr)',
        fuelType: 'Plug-in Hybrid',
        fuelConsumption: '2.1 L / 100 km (NEDC/WLTP tsiklida)',
        dimensions: '4,689 x 1,942 x 1,293 mm',
        trunk: '154 L',
        exterior: 'LifeDrive karbon-alyuminiy arxitekturasi va yuqoriga ochiluvchi "dihedral" eshiklar.',
        interior: 'Futuristik 2+2 salon, yengil materiallar va gibrid energiya ko\'rsatkichlari.',
        technologies: ['CFRP karbon tolali yo\'lovchi kapsulasi', 'eDrive gibrid tizimi'],
        safety: ['Dynamic Stability Control', 'Airbag tizimlari', 'LED/Laser optika'],
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=80',
        interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
    }
];

// =========================================================================
// 2. BMW TARIXI (TIMELINE)
// =========================================================================
const BMW_HISTORY = [
    {
        year: '1916',
        title: 'Kompaniyaning tashkil topishi (7-mart)',
        desc: 'Myunxenda aviatsiya dvigatellari ishlab chiqaruvchi Rapp Motorenwerke tashkil etildi; keyinchalik Bayerische Motoren Werke AG (BMW) nomi shakllandi.'
    },
    {
        year: '1917',
        title: 'BMW logotipi va nomi',
        desc: 'BMW — Bayerische Motoren Werke (Bavariya motor zavodlari). Dumaloq ramz ichidagi oq va ko\'k ranglar Bavariya ranglarini ifodalaydi.'
    },
    {
        year: '1923–1928',
        title: 'Birinchi motosikl va birinchi avtomobil',
        desc: '1923-yilda R 32 motosikli chiqarildi. 1928-yilda Eisenach zavodini sotib olish orqali BMW avtomobilsozlikka kirdi (Dixi 3/15).'
    },
    {
        year: '1936–1959',
        title: 'Afsonaviy klassik modellar: 328 va 507',
        desc: 'BMW 328 poygalarda g\'alaba qozondi, BMW 507 esa dizayn va V8 muhandisligining ramziga aylandi.'
    },
    {
        year: '1972',
        title: 'BMW Motorsport (M) tashkil topishi',
        desc: 'Avtopoyga va yuqori unumdorlikdagi avtomobillar uchun maxsus bo\'linma yaratildi — bugungi BMW M GMBH asosi.'
    },
    {
        year: '1999–2013',
        title: 'X Series SUV, iDrive va BMW i',
        desc: '1999-yilda birinchi X5 SAV taqdim etildi, 2001-yilda iDrive tizimi joriy qilindi, 2013-yilda esa elektr BMW i3 yo\'lga chiqdi.'
    },
    {
        year: '2021–2026',
        title: 'BMW iX, i7, M Hybrid va Neue Klasse davri',
        desc: 'BMW elektr mobillik, gibrid M modellari (XM, M5) va yangi avlod raqamli/batareya arxitekturasi bilan global yetakchiligini davom ettirmoqda.'
    }
];

// =========================================================================
// 3. BMW TEXNOLOGIYALARI (10 TA TIZIM)
// =========================================================================
const BMW_TECHNOLOGIES = [
    {
        name: 'BMW iDrive',
        desc: 'Avtomobilning axborot-ko\'ngilochar, navigatsiya va sozlamalarini boshqaruvchi markaziy tizim.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'BMW Curved Display',
        desc: 'Haydovchi tomoniga biroz burilgan, yuqori aniqlikdagi egri raqamli asboblar va markaziy sensorli ekran.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'BMW Driving Assistant',
        desc: 'Yo\'l chizig\'ini ushlash, to\'qnashuvdan ogohlantirish va masofa saqlashga yordam beruvchi haydovchi yordamchilari.',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'BMW xDrive',
        desc: 'Yo\'l sharoiti va g\'ildiraklar ilashuviga qarab momentni old va orqa o\'qlar o\'rtasida aqlli taqsimlovchi to\'liq uzatma.',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'BMW TwinPower Turbo',
        desc: 'Tezkor gaz javobi, yuqori samaradorlik va quvvatni birlashtirgan turbina, purkash va klapan boshqaruvi texnologiyasi.',
        image: 'image_agent_tag_9233442398636446274'
    },
    {
        name: 'BMW Head-Up Display',
        desc: 'Tezlik, navigatsiya ko\'rsatmalari va ogohlantirishlarni to\'g\'ridan-to\'g\'ri old oynada ko\'rsatuvchi proyeksion tizim.',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'BMW Gesture Control',
        desc: 'Qo\'l harakatlari (masalan, ovoz balandligini o\'zgartirish yoki qo\'ng\'iroqqa javob berish) orqali boshqaruv.',
        image: 'image_agent_tag_9233442398636447793'
    },
    {
        name: 'BMW Intelligent Personal Assistant',
        desc: 'Tabiiy nutq orqali iqlim, navigatsiya, oynalar va avtomobil funksiyalarini boshqaruvchi ovozli yordamchi.',
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'BMW Parking Assistant',
        desc: 'Parallel va perpendikulyar parkovka, kamera ko\'rinishlari hamda oxirgi trayektoriyani eslab qoluvchi yordamchi.',
        image: 'image_agent_tag_9233442398636447332'
    },
    {
        name: 'BMW ConnectedDrive',
        desc: 'Smartfon ilovasi, bulutli xizmatlar, real vaqt trafik ma\'lumotlari va masofaviy funksiyalar ekotizimi.',
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=800&q=80'
    }
];

// =========================================================================
// 4. GALLERY RASMLARI
// =========================================================================
const GALLERY_ITEMS = [
    { title: 'BMW Sport Eksteryer', category: 'exterior', src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80' },
    { title: 'BMW Sedan Profili', category: 'exterior', src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80' },
    { title: 'BMW Hashamatli Salon', category: 'interior', src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80' },
    { title: 'BMW Sport Kokpit', category: 'interior', src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80' },
    { title: 'BMW M4 Competition', category: 'm', src: 'image_agent_tag_9233442398636446274' },
    { title: 'BMW X5 SAV', category: 'suv', src: 'image_agent_tag_9233442398636447332' },
    { title: 'BMW i7 Electric Sedan', category: 'electric', src: 'image_agent_tag_9233442398636447793' },
    { title: 'BMW Klassik Tarixiy Model', category: 'historic', src: 'image_agent_tag_9233442398636448851' }
];

// =========================================================================
// 5. HOLAT (LOCALSTORAGE) VA YORDAMCHI FUNKSIYALAR
// =========================================================================
const STORAGE_KEYS = {
    FAVORITES: 'bmw_favorites_v1',
    COMPARE: 'bmw_compare_v1',
    THEME: 'bmw_theme_v1'
};

let favorites = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || ['bmw-m3', 'bmw-i7'];
let compareIds = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPARE)) || ['bmw-3-series', 'bmw-m3', 'bmw-i4'];

function saveStorage() {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(compareIds));
}

function formatUSD(price) {
    if (!price || price <= 0) return 'Tarixiy model';
    return '$' + price.toLocaleString('en-US');
}

function parseAccelSeconds(accelStr) {
    const num = parseFloat(accelStr);
    return Number.isNaN(num) ? 999 : num;
}

function getCategoryLabel(cat) {
    const map = {
        'sedan': 'BMW Sedan',
        'suv': 'BMW SUV (X Series)',
        'm-series': 'BMW M Series',
        'electric': 'BMW Electric (i Series)',
        'coupe-convertible': 'Coupe & Convertible',
        'historic': 'Historic Model'
    };
    return map[cat] || 'BMW';
}

// =========================================================================
// 6. KARTOCHKALARNI CHIZISH (MODELS, M, ELECTRIC, TECH, HISTORY, GALLERY)
// =========================================================================
function createCarCardHTML(car) {
    const isFav = favorites.includes(car.id);
    const inCompare = compareIds.includes(car.id);

    return `
        <div class="col-md-6 col-lg-4">
            <div class="car-card">
                <div class="car-img-wrap">
                    <img src="${car.image}" alt="${car.name}" loading="lazy">
                    <span class="car-year-badge">${car.year}</span>
                    <button type="button" class="car-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${car.id}')" title="Sevimlilarga qo'shish">
                        <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>
                <div class="p-3 d-flex flex-column flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <span class="small text-primary fw-bold">${getCategoryLabel(car.category)}</span>
                        <span class="fw-black">${formatUSD(car.price)}</span>
                    </div>
                    <h5 class="fw-bold mb-1">${car.name}</h5>
                    <p class="small opacity-75 mb-0">${car.engineType}</p>

                    <div class="car-specs-mini">
                        <div>
                            <span class="spec-val">${car.hp} HP</span>
                            <span class="spec-lbl">Quvvat</span>
                        </div>
                        <div>
                            <span class="spec-val">${car.accel}</span>
                            <span class="spec-lbl">0–100 km/h</span>
                        </div>
                        <div>
                            <span class="spec-val">${car.topSpeed}</span>
                            <span class="spec-lbl">Maks. tezlik</span>
                        </div>
                    </div>

                    <div class="mt-auto d-flex gap-2">
                        <button type="button" class="btn btn-bmw-primary btn-sm flex-grow-1 fw-bold py-2" onclick="openCarDetails('${car.id}')">
                            Batafsil ma'lumot
                        </button>
                        ${!car.isHistoric ? `
                        <button type="button" class="btn ${inCompare ? 'btn-info text-dark' : 'btn-bmw-outline'} btn-sm px-2" onclick="toggleCompare('${car.id}')" title="Taqqoslashga qo'shish">
                            <i class="bi bi-bar-chart-steps"></i>
                        </button>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderFilteredModels() {
    const searchVal = document.getElementById('searchModelInput').value.trim().toLowerCase();
    const maxPriceVal = document.getElementById('priceFilterSelect').value;
    const minHpVal = document.getElementById('hpFilterSelect').value;
    const yearVal = document.getElementById('yearFilterSelect').value;
    const sortVal = document.getElementById('sortModelsSelect').value;
    const activeTab = document.querySelector('#modelCategoryTabs .bmw-cat-btn.active')?.dataset.category || 'all';

    let list = BMW_MODELS.filter(m => !m.isHistoric);

    if (activeTab !== 'all') {
        list = list.filter(m => m.category === activeTab);
    }
    if (searchVal) {
        list = list.filter(m =>
            m.name.toLowerCase().includes(searchVal) ||
            m.engineType.toLowerCase().includes(searchVal)
        );
    }
    if (maxPriceVal !== 'all') {
        list = list.filter(m => m.price <= Number(maxPriceVal));
    }
    if (minHpVal !== 'all') {
        list = list.filter(m => m.hp >= Number(minHpVal));
    }
    if (yearVal !== 'all') {
        list = list.filter(m => String(m.year) === yearVal);
    }

    if (sortVal === 'price-asc') {
        list.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
        list.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'hp-desc') {
        list.sort((a, b) => b.hp - a.hp);
    } else if (sortVal === 'accel-asc') {
        list.sort((a, b) => parseAccelSeconds(a.accel) - parseAccelSeconds(b.accel));
    }

    document.getElementById('modelsResultCount').textContent = list.length;
    const grid = document.getElementById('modelsGrid');

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5 glass-card rounded-4">
                <i class="bi bi-car-front fs-1 opacity-50 d-block mb-2"></i>
                <h5 class="fw-bold">Mos model topilmadi</h5>
                <p class="small opacity-75">Qidiruv so'zi yoki filtrlarni o'zgartirib ko'ring.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(createCarCardHTML).join('');
}

function renderMShowcase() {
    const mCars = BMW_MODELS.filter(m => m.category === 'm-series').slice(0, 3);
    document.getElementById('mShowcaseGrid').innerHTML = mCars.map(createCarCardHTML).join('');
}

function renderElectricSection() {
    const evCars = BMW_MODELS.filter(m => m.category === 'electric');
    const grid = document.getElementById('electricGrid');
    grid.innerHTML = evCars.map(car => `
        <div class="col-md-6 col-lg-4">
            <div class="car-card">
                <div class="car-img-wrap">
                    <img src="${car.image}" alt="${car.name}" loading="lazy">
                    <span class="car-year-badge">${car.year} • BEV</span>
                    <button type="button" class="car-fav-btn ${favorites.includes(car.id) ? 'active' : ''}" onclick="toggleFavorite('${car.id}')">
                        <i class="bi ${favorites.includes(car.id) ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>
                <div class="p-3 d-flex flex-column flex-grow-1">
                    <h5 class="fw-bold mb-1">${car.name}</h5>
                    <p class="small opacity-75 mb-2">${car.motorSpecs}</p>
                    <ul class="list-unstyled small mb-3">
                        <li><strong>Batareya:</strong> ${car.batteryCapacity}</li>
                        <li><strong>Yurish masofasi:</strong> ${car.rangeKm}</li>
                        <li><strong>Quvvat:</strong> ${car.hp} HP (${car.torque})</li>
                        <li><strong>Zaryadlash:</strong> ${car.chargeTime}</li>
                        <li><strong>Texnologiyalar:</strong> ${car.technologies.join(', ')}</li>
                    </ul>
                    <div class="mt-auto d-flex gap-2">
                        <button type="button" class="btn btn-bmw-primary btn-sm flex-grow-1 fw-bold" onclick="openCarDetails('${car.id}')">
                            Batafsil ma'lumot
                        </button>
                        <button type="button" class="btn btn-bmw-outline btn-sm px-2" onclick="toggleCompare('${car.id}')" title="Taqqoslash">
                            <i class="bi bi-bar-chart-steps"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTechnologies() {
    document.getElementById('technologiesGrid').innerHTML = BMW_TECHNOLOGIES.map(tech => `
        <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="glass-card p-3 rounded-4 h-100 tech-card">
                <img src="${tech.image}" alt="${tech.name}" loading="lazy">
                <h6 class="fw-bold mb-1">${tech.name}</h6>
                <p class="small opacity-75 mb-0">${tech.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderHistoryTimeline() {
    document.getElementById('historyTimeline').innerHTML = BMW_HISTORY.map(item => `
        <div class="timeline-item glass-card p-4 rounded-4">
            <span class="badge bg-primary mb-2">${item.year}</span>
            <h5 class="fw-bold mb-1">${item.title}</h5>
            <p class="small opacity-80 mb-0">${item.desc}</p>
        </div>
    `).join('');
}

function renderHistoricModels() {
    const historic = BMW_MODELS.filter(m => m.isHistoric);
    document.getElementById('historicModelsGrid').innerHTML = historic.map(createCarCardHTML).join('');
}

function renderGallery(filterCat = 'all') {
    const items = filterCat === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(g => g.category === filterCat);

    document.getElementById('galleryGrid').innerHTML = items.map(item => `
        <div class="col-sm-6 col-lg-3">
            <div class="gallery-card" onclick="openLightbox('${item.src}', '${item.title.replace(/'/g, "\\'")}')">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <span class="fw-bold small">${item.title}</span>
                    <span class="opacity-75" style="font-size: 0.72rem;"><i class="bi bi-zoom-in me-1"></i>Katta ko'rish</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openLightbox(src, title) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxTitle').textContent = title;
    const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    modal.show();
}

// =========================================================================
// 7. CAR DETAILS MODAL
// =========================================================================
function openCarDetails(carId) {
    const car = BMW_MODELS.find(m => m.id === carId);
    if (!car) return;

    document.getElementById('modalCarCategoryBadge').textContent = getCategoryLabel(car.category);
    document.getElementById('modalCarTitle').textContent = `${car.name} (${car.year})`;

    const body = document.getElementById('carDetailsModalBody');
    body.innerHTML = `
        <div class="row g-4 mb-4">
            <div class="col-md-6">
                <img src="${car.image}" alt="${car.name} tashqi ko'rinishi" class="img-fluid rounded-3 w-100" style="max-height: 300px; object-fit: cover;">
                <div class="small opacity-75 mt-1">Tashqi ko'rinish (Exterior)</div>
            </div>
            <div class="col-md-6">
                <img src="${car.interiorImage || car.image}" alt="${car.name} saloni" class="img-fluid rounded-3 w-100" style="max-height: 300px; object-fit: cover;">
                <div class="small opacity-75 mt-1">Salon ko'rinishi (Interior)</div>
            </div>
        </div>

        <div class="row g-3 mb-4">
            <div class="col-md-6">
                <div class="glass-card p-3 rounded-3 h-100">
                    <h6 class="fw-bold text-primary">Tashqi ko'rinishi (Exterior)</h6>
                    <p class="small mb-0">${car.exterior}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="glass-card p-3 rounded-3 h-100">
                    <h6 class="fw-bold text-primary">Salon ko'rinishi (Interior)</h6>
                    <p class="small mb-0">${car.interior}</p>
                </div>
            </div>
        </div>

        <h6 class="fw-bold text-uppercase mb-3">Texnik xususiyatlar</h6>
        <div class="table-responsive mb-4">
            <table class="table table-bordered small mb-0">
                <tbody>
                    <tr><th>Narxi</th><td><strong>${formatUSD(car.price)}</strong></td><th>Model yili</th><td>${car.year}</td></tr>
                    <tr><th>Dvigatel</th><td>${car.engineType}</td><th>Dvigatel hajmi</th><td>${car.displacement}</td></tr>
                    <tr><th>Ot kuchi (HP)</th><td>${car.hp} HP</td><th>Aylanish momenti</th><td>${car.torque}</td></tr>
                    <tr><th>Maksimal tezlik</th><td>${car.topSpeed}</td><th>0–100 km/h tezlanish</th><td>${car.accel}</td></tr>
                    <tr><th>Transmissiya</th><td>${car.transmission}</td><th>Yoqilg'i turi</th><td>${car.fuelType}</td></tr>
                    <tr><th>Yoqilg'i / Energiya sarfi</th><td>${car.fuelConsumption}</td><th>Bagaj hajmi</th><td>${car.trunk}</td></tr>
                    <tr><th>O'lchamlari</th><td colspan="3">${car.dimensions}</td></tr>
                </tbody>
            </table>
        </div>

        <div class="row g-3">
            <div class="col-md-6">
                <h6 class="fw-bold">Texnologiyalar</h6>
                <ul class="small mb-0">
                    ${car.technologies.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
            <div class="col-md-6">
                <h6 class="fw-bold">Xavfsizlik tizimlari</h6>
                <ul class="small mb-0">
                    ${car.safety.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('carDetailsModal'));
    modal.show();
}

// =========================================================================
// 8. FAVORITES & COMPARE FUNKSIYALARI
// =========================================================================
function toggleFavorite(carId) {
    const idx = favorites.indexOf(carId);
    if (idx === -1) {
        favorites.push(carId);
    } else {
        favorites.splice(idx, 1);
    }
    saveStorage();
    updateFavoritesUI();
    renderFilteredModels();
    renderMShowcase();
    renderElectricSection();
    renderHistoricModels();
}

function updateFavoritesUI() {
    document.getElementById('favoritesCount').textContent = favorites.length;
    const body = document.getElementById('favoritesListBody');

    if (favorites.length === 0) {
        body.innerHTML = `<p class="small opacity-75 text-center py-4">Hali sevimli avtomobillar qo'shilmagan.</p>`;
        return;
    }

    const items = BMW_MODELS.filter(m => favorites.includes(m.id));
    body.innerHTML = items.map(car => `
        <div class="d-flex align-items-center gap-3 p-2 mb-2 glass-card rounded-3">
            <img src="${car.image}" alt="${car.name}" style="width: 64px; height: 48px; object-fit: cover; border-radius: 8px;">
            <div class="flex-grow-1">
                <div class="fw-bold small">${car.name}</div>
                <div class="small opacity-75">${formatUSD(car.price)} • ${car.hp} HP</div>
            </div>
            <button class="btn btn-sm btn-bmw-outline" onclick="openCarDetails('${car.id}')">Ko'rish</button>
            <button class="btn btn-sm text-danger" onclick="toggleFavorite('${car.id}')"><i class="bi bi-trash"></i></button>
        </div>
    `).join('');
}

function populateCompareDropdown() {
    const select = document.getElementById('compareSelectDropdown');
    const available = BMW_MODELS.filter(m => !m.isHistoric);
    select.innerHTML = available.map(m => `<option value="${m.id}">${m.name} (${formatUSD(m.price)}, ${m.hp} HP)</option>`).join('');
}

function toggleCompare(carId) {
    const idx = compareIds.indexOf(carId);
    if (idx !== -1) {
        compareIds.splice(idx, 1);
    } else {
        if (compareIds.length >= 4) {
            compareIds.shift();
        }
        compareIds.push(carId);
    }
    saveStorage();
    renderCompareTable();
    renderFilteredModels();
}

function renderCompareTable() {
    document.getElementById('compareCount').textContent = compareIds.length;
    const wrapper = document.getElementById('compareTableWrapper');
    const selectedCars = BMW_MODELS.filter(m => compareIds.includes(m.id));

    if (selectedCars.length < 2) {
        wrapper.innerHTML = `<p class="text-center small opacity-75 py-4 mb-0">Taqqoslash jadvalini ko'rish uchun kamida 2 ta model tanlang.</p>`;
        return;
    }

    const rows = [
        { label: 'Narxi', fn: c => formatUSD(c.price) },
        { label: 'Ot kuchi (HP)', fn: c => `${c.hp} HP` },
        { label: 'Dvigatel', fn: c => c.engineType },
        { label: '0–100 km/h tezlanish', fn: c => c.accel },
        { label: 'Maksimal tezlik', fn: c => c.topSpeed },
        { label: 'Yoqilg\'i / Energiya sarfi', fn: c => c.fuelConsumption },
        { label: 'O\'lchamlari', fn: c => c.dimensions },
        { label: 'Bagaj hajmi', fn: c => c.trunk }
    ];

    wrapper.innerHTML = `
        <table class="table table-bordered align-middle small mb-0">
            <thead>
                <tr>
                    <th>Xususiyat</th>
                    ${selectedCars.map(c => `
                        <th>
                            <div class="fw-bold">${c.name}</div>
                            <button type="button" class="btn btn-link btn-sm text-danger p-0" onclick="toggleCompare('${c.id}')">Olib tashlash</button>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                ${rows.map(r => `
                    <tr>
                        <th class="fw-semibold">${r.label}</th>
                        ${selectedCars.map(c => `<td>${r.fn(c)}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// =========================================================================
// 9. TEMA (DARK/LIGHT), SCROLL ANIMATSIYA, CONTACT VA INITIALIZATION
// =========================================================================
function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    applyTheme(saved);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    }
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderFilteredModels();
    renderMShowcase();
    renderElectricSection();
    renderTechnologies();
    renderHistoryTimeline();
    renderHistoricModels();
    renderGallery();
    populateCompareDropdown();
    updateFavoritesUI();
    renderCompareTable();
    initScrollReveal();

    // Hide loader
    setTimeout(() => {
        document.getElementById('pageLoader')?.classList.add('hidden');
    }, 350);

    // Theme toggle
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Favorites offcanvas
    document.getElementById('openFavoritesBtn')?.addEventListener('click', () => {
        updateFavoritesUI();
        const offcanvas = new bootstrap.Offcanvas(document.getElementById('favoritesOffcanvas'));
        offcanvas.show();
    });

    // Model category tabs
    document.querySelectorAll('#modelCategoryTabs .bmw-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#modelCategoryTabs .bmw-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderFilteredModels();
        });
    });

    // Filters & sort listeners
    ['searchModelInput', 'priceFilterSelect', 'hpFilterSelect', 'yearFilterSelect', 'sortModelsSelect'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', renderFilteredModels);
        document.getElementById(id)?.addEventListener('change', renderFilteredModels);
    });

    document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
        document.getElementById('searchModelInput').value = '';
        document.getElementById('priceFilterSelect').value = 'all';
        document.getElementById('hpFilterSelect').value = 'all';
        document.getElementById('yearFilterSelect').value = 'all';
        document.getElementById('sortModelsSelect').value = 'default';
        document.querySelectorAll('#modelCategoryTabs .bmw-cat-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.category === 'all');
        });
        renderFilteredModels();
    });

    // Gallery filter tabs
    document.querySelectorAll('#galleryFilters .bmw-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#galleryFilters .bmw-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.gallery);
        });
    });

    // Compare controls
    document.getElementById('addCompareBtn')?.addEventListener('click', () => {
        const chosenId = document.getElementById('compareSelectDropdown').value;
        if (chosenId && !compareIds.includes(chosenId)) {
            if (compareIds.length >= 4) compareIds.shift();
            compareIds.push(chosenId);
            saveStorage();
            renderCompareTable();
            renderFilteredModels();
        }
    });

    document.getElementById('clearCompareBtn')?.addEventListener('click', () => {
        compareIds = [];
        saveStorage();
        renderCompareTable();
        renderFilteredModels();
    });

    // Contact form
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = document.getElementById('contactFeedback');
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }
        const name = document.getElementById('contactName').value.trim();
        feedback.textContent = `Rahmat, ${name}! Xabaringiz qabul qilindi.`;
        feedback.classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');
    });

    // Back to top
    const backBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn?.classList.add('visible');
        } else {
            backBtn?.classList.remove('visible');
        }
    });
    backBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});