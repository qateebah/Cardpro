document.addEventListener('DOMContentLoaded', function() {
    // --------------------------
    // المتغيرات العامة والعناصر
    // --------------------------
    const idCard = document.getElementById('idCard');
    const idCardFront = document.querySelector('.id-card-front');
    const idCardBack = document.querySelector('.id-card-back');
    const databaseRows = document.getElementById('databaseRows');
    
    // عناصر التحكم الرئيسية
    const flipCardBtn = document.getElementById('flipCardBtn');
    const changeDesignBtn = document.getElementById('changeDesignBtn');
    const printCardBtn = document.getElementById('printCardBtn');
    const saveCardBtn = document.getElementById('saveCardBtn');
    const verifyCardBtn = document.getElementById('verifyCardBtn');
    const exportCardBtn = document.getElementById('exportCardBtn');
    const newCardBtn = document.getElementById('newCardBtn');
    const importCardBtn = document.getElementById('importCardBtn');
    const randomDataBtn = document.getElementById('randomDataBtn');
    const resetCardBtn = document.getElementById('resetCardBtn');
    const rotateCardBtn = document.getElementById('rotateCardBtn');
    
    // عناصر الميزات المتقدمة
    const nfcBtn = document.getElementById('nfcBtn');
    const biometricBtn = document.getElementById('biometricBtn');
    const qrBtn = document.getElementById('qrBtn');
    const barcodeBtn = document.getElementById('barcodeBtn');
    const encryptBtn = document.getElementById('encryptBtn');
    const watermarkBtn = document.getElementById('watermarkBtn');
    
    // عناصر محرر البيانات
    const idNumberInput = document.getElementById('idNumberInput');
    const fullNameInput = document.getElementById('fullNameInput');
    const nationalitySelect = document.getElementById('nationalitySelect');
    const bloodTypeSelect = document.getElementById('bloodTypeSelect');
    const hijriDobInput = document.getElementById('hijriDobInput');
    const gregorianDobInput = document.getElementById('gregorianDobInput');
    const pobInput = document.getElementById('pobInput');
    const photoUploadInput = document.getElementById('photoUploadInput');
    const photoUploadArea = document.getElementById('photoUploadArea');
    const issueDateInput = document.getElementById('issueDateInput');
    const expiryDateInput = document.getElementById('expiryDateInput');
    const issuingCenterSelect = document.getElementById('issuingCenterSelect');
    const chipNumberInput = document.getElementById('chipNumberInput');
    const signatureCanvas = document.getElementById('signatureCanvas');
    const clearSignature = document.getElementById('clearSignature');
    const saveSignature = document.getElementById('saveSignature');
    const maritalStatusSelect = document.getElementById('maritalStatusSelect');
    const occupationInput = document.getElementById('occupationInput');
    const addressInput = document.getElementById('addressInput');
    const mobileInput = document.getElementById('mobileInput');
    const emailInput = document.getElementById('emailInput');
    const notesInput = document.getElementById('notesInput');
    const saveDataBtn = document.getElementById('saveDataBtn');
    const clearDataBtn = document.getElementById('clearDataBtn');
    const validateDataBtn = document.getElementById('validateDataBtn');
    
    // النوافذ المنبثقة
    const nfcModal = document.getElementById('nfcModal');
    const biometricModal = document.getElementById('biometricModal');
    const qrModal = document.getElementById('qrModal');
    const printModal = document.getElementById('printModal');
    const securityModal = document.getElementById('securityModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    // عناصر NFC
    const nfcCloseBtn = document.getElementById('nfcCloseBtn');
    const nfcStatus = document.getElementById('nfcStatus');
    const nfcCardNumber = document.getElementById('nfcCardNumber');
    const nfcName = document.getElementById('nfcName');
    const nfcDob = document.getElementById('nfcDob');
    const nfcCardStatus = document.getElementById('nfcCardStatus');
    
    // عناصر البيومترية
    const bioOptions = document.querySelectorAll('.bio-option');
    const fingerprintScanner = document.getElementById('fingerprintScanner');
    const faceScanner = document.getElementById('faceScanner');
    const irisScanner = document.getElementById('irisScanner');
    const startScanBtn = document.getElementById('startScanBtn');
    const bioCloseBtn = document.getElementById('bioCloseBtn');
    const biometricResult = document.querySelector('.biometric-result');
    
    // عناصر QR Code
    const qrGeneratorPreview = document.getElementById('qrGeneratorPreview');
    const qrTextInput = document.getElementById('qrTextInput');
    const qrColorInput = document.getElementById('qrColorInput');
    const qrSizeInput = document.getElementById('qrSizeInput');
    const generateQrBtn = document.getElementById('generateQrBtn');
    const applyQrBtn = document.getElementById('applyQrBtn');
    
    // عناصر الطباعة
    const printPreview = document.getElementById('printPreview');
    const paperType = document.getElementById('paperType');
    const cardSize = document.getElementById('cardSize');
    const printCopies = document.getElementById('printCopies');
    const printQuality = document.getElementById('printQuality');
    const printCropMarks = document.getElementById('printCropMarks');
    const printWatermark = document.getElementById('printWatermark');
    const printNowBtn = document.getElementById('printNowBtn');
    const printPdfBtn = document.getElementById('printPdfBtn');
    const printPreviewBtn = document.getElementById('printPreviewBtn');
    
    // عناصر التحقق الأمني
    const securityCloseBtn = document.getElementById('securityCloseBtn');
    const securityChecks = document.querySelectorAll('.check-item');
    const securityResult = document.querySelector('.security-result');
    const checksPassed = document.querySelector('.checks-passed');
    const resultMessage = document.querySelector('.result-message');
    
    // التبويبات
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const editorTabs = document.querySelectorAll('.editor-tab');
    const editorContents = document.querySelectorAll('.editor-content');
    
    // --------------------------
    // البيانات والمتغيرات العامة
    // --------------------------
    let currentCardData = {
        idNumber: '1122334455',
        fullName: 'عبدالله محمد أحمد آل سعود',
        nationality: 'SA',
        bloodType: 'O+',
        hijriDob: '12/05/1405',
        gregorianDob: '1985-02-23',
        pob: 'الرياض',
        issueDate: '01/01/1443',
        expiryDate: '01/01/1453',
        issuingCenter: 'RIYADH_MAIN',
        chipNumber: 'SA-XF-7890-1122',
        maritalStatus: 'SINGLE',
        occupation: 'مهندس برمجيات',
        address: 'الرياض - حي المروج',
        mobile: '0550123456',
        email: 'a.alsaud@example.com',
        notes: 'لا يوجد ملاحظات',
        photo: null,
        signature: null,
        qrCode: 'ID:1122334455\nName:عبدالله محمد أحمد آل سعود',
        barcode: '1122334455',
        designTheme: 'default',
        rotation: 0
    };
    
    let database = [];
    let signaturePad = null;
    
    // --------------------------
    // تهيئة التطبيق
    // --------------------------
    function initApp() {
        // تهيئة لوحة التوقيع
        signaturePad = new SignaturePad(signatureCanvas, {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            penColor: '#1a4b7a',
            minWidth: 1,
            maxWidth: 2
        });
        
        // تحميل البيانات الأولية
        loadSampleData();
        updateCardDesign();
        updateDatabaseTable();
        
        // تعيين معالج الأحداث
        setupEventListeners();
    }
    
    // --------------------------
    // تحميل البيانات الأولية
    // --------------------------
    function loadSampleData() {
        // بيانات عينة لقاعدة البيانات
        database = [
            {
                id: '1122334455',
                name: 'عبدالله محمد أحمد آل سعود',
                issueDate: '01/01/1443',
                status: 'نشطة'
            },
            {
                id: '2233445566',
                name: 'سارة خالد الحربي',
                issueDate: '01/06/1443',
                status: 'نشطة'
            },
            {
                id: '3344556677',
                name: 'محمد عبدالرحمن العتيبي',
                issueDate: '01/03/1443',
                status: 'منتهية'
            },
            {
                id: '4455667788',
                name: 'نورة سعد القحطاني',
                issueDate: '01/09/1443',
                status: 'نشطة'
            }
        ];
        
        // تحديث واجهة المستخدم بالبيانات الأولية
        updateFormData();
        generateQRCode(currentCardData.qrCode);
        generateBarcode(currentCardData.barcode);
    }
    
    // --------------------------
    // تعيين معالج الأحداث
    // --------------------------
    function setupEventListeners() {
        // أحداث التحكم الرئيسية
        flipCardBtn.addEventListener('click', toggleCardFlip);
        changeDesignBtn.addEventListener('click', changeCardDesign);
        printCardBtn.addEventListener('click', showPrintModal);
        saveCardBtn.addEventListener('click', saveCard);
        verifyCardBtn.addEventListener('click', showSecurityModal);
        exportCardBtn.addEventListener('click', exportToPDF);
        newCardBtn.addEventListener('click', createNewCard);
        importCardBtn.addEventListener('click', importCardData);
        randomDataBtn.addEventListener('click', generateRandomData);
        resetCardBtn.addEventListener('click', resetCard);
        rotateCardBtn.addEventListener('click', rotateCard);
        
        // أحداث الميزات المتقدمة
        nfcBtn.addEventListener('click', showNfcModal);
        biometricBtn.addEventListener('click', showBiometricModal);
        qrBtn.addEventListener('click', showQrModal);
        barcodeBtn.addEventListener('click', generateBarcodeModal);
        encryptBtn.addEventListener('click', encryptData);
        watermarkBtn.addEventListener('click', addWatermark);
        
        // أحداث محرر البيانات
        saveDataBtn.addEventListener('click', saveFormData);
        clearDataBtn.addEventListener('click', clearFormData);
        validateDataBtn.addEventListener('click', validateFormData);
        photoUploadInput.addEventListener('change', handlePhotoUpload);
        clearSignature.addEventListener('click', clearSignaturePad);
        saveSignature.addEventListener('click', saveSignaturePad);
        
        // أحداث النوافذ المنبثقة
        closeModalButtons.forEach(btn => btn.addEventListener('click', closeModal));
        nfcCloseBtn.addEventListener('click', () => closeModal(nfcModal));
        bioCloseBtn.addEventListener('click', () => closeModal(biometricModal));
        
        // أحداث NFC
        nfcCloseBtn.addEventListener('click', () => closeModal(nfcModal));
        
        // أحداث البيومترية
        bioOptions.forEach(option => {
            option.addEventListener('click', () => selectBiometricOption(option));
        });
        startScanBtn.addEventListener('click', startBiometricScan);
        
        // أحداث QR Code
        generateQrBtn.addEventListener('click', generateQrPreview);
        applyQrBtn.addEventListener('click', applyQrToCard);
        
        // أحداث الطباعة
        printNowBtn.addEventListener('click', printCard);
        printPdfBtn.addEventListener('click', printToPDF);
        printPreviewBtn.addEventListener('click', updatePrintPreview);
        
        // أحداث التحقق الأمني
        securityCloseBtn.addEventListener('click', () => closeModal(securityModal));
        
        // أحداث التبويبات
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn));
        });
        
        editorTabs.forEach(tab => {
            tab.addEventListener('click', () => switchEditorTab(tab));
        });
        
        // تحديث البطاقة عند تغيير البيانات
        const formInputs = document.querySelectorAll('.form-control, select');
        formInputs.forEach(input => {
            input.addEventListener('change', updateCardFromForm);
        });
    }
    
    // --------------------------
    // وظائف التحكم الرئيسية
    // --------------------------
    function toggleCardFlip() {
        idCard.classList.toggle('flipped');
    }
    
    function changeCardDesign() {
        const themes = ['default', 'modern', 'classic', 'dark'];
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        currentCardData.designTheme = randomTheme;
        updateCardDesign();
    }
    
    function showPrintModal() {
        updatePrintPreview();
        printModal.style.display = 'flex';
    }
    
    function saveCard() {
        // في تطبيق حقيقي، هنا سيتم حفظ البيانات إلى الخادم أو قاعدة البيانات
        const cardIndex = database.findIndex(card => card.id === currentCardData.idNumber);
        
        if (cardIndex !== -1) {
            // تحديث البطاقة الموجودة
            database[cardIndex] = {
                id: currentCardData.idNumber,
                name: currentCardData.fullName,
                issueDate: currentCardData.issueDate,
                status: 'نشطة'
            };
        } else {
            // إضافة بطاقة جديدة
            database.push({
                id: currentCardData.idNumber,
                name: currentCardData.fullName,
                issueDate: currentCardData.issueDate,
                status: 'نشطة'
            });
        }
        
        updateDatabaseTable();
        showNotification('تم حفظ البطاقة بنجاح', 'success');
    }
    
    function showSecurityModal() {
        securityModal.style.display = 'flex';
        simulateSecurityCheck();
    }
    
    function exportToPDF() {
        // في تطبيق حقيقي، هنا سيتم تصدير البطاقة كملف PDF
        showNotification('تم تصدير البطاقة كملف PDF', 'success');
    }
    
    function createNewCard() {
        if (confirm('هل أنت متأكد من إنشاء بطاقة جديدة؟ سيتم مسح البيانات الحالية.')) {
            resetCard();
        }
    }
    
    function importCardData() {
        // في تطبيق حقيقي، هنا سيتم استيراد البيانات من ملف
        showNotification('تم استيراد بيانات البطاقة', 'success');
    }
    
    function generateRandomData() {
        const firstNames = ['عبدالله', 'محمد', 'أحمد', 'خالد', 'سعد', 'فيصل', 'ناصر', 'علي'];
        const middleNames = ['محمد', 'عبدالله', 'عبدالرحمن', 'إبراهيم', 'خالد', 'سعد'];
        const lastNames = ['آل سعود', 'الحربي', 'العتيبي', 'القحطاني', 'الزهيري', 'الغنيم', 'السليم'];
        const cities = ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'الطائف', 'تبوك'];
        const occupations = ['مهندس', 'طبيب', 'معلم', 'موظف حكومي', 'رجل أعمال', 'محاسب', 'طيار'];
        
        currentCardData = {
            idNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
            fullName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${middleNames[Math.floor(Math.random() * middleNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
            nationality: Math.random() > 0.2 ? 'SA' : 'OTHER',
            bloodType: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'][Math.floor(Math.random() * 8)],
            hijriDob: `${Math.floor(1 + Math.random() * 30)}/${Math.floor(1 + Math.random() * 12)}/${Math.floor(1400 + Math.random() * 30)}`,
            gregorianDob: `19${Math.floor(80 + Math.random() * 20)}-${Math.floor(1 + Math.random() * 12).toString().padStart(2, '0')}-${Math.floor(1 + Math.random() * 28).toString().padStart(2, '0')}`,
            pob: cities[Math.floor(Math.random() * cities.length)],
            issueDate: `${Math.floor(1 + Math.random() * 30)}/${Math.floor(1 + Math.random() * 12)}/${Math.floor(1440 + Math.random() * 5)}`,
            expiryDate: `${Math.floor(1 + Math.random() * 30)}/${Math.floor(1 + Math.random() * 12)}/${Math.floor(1450 + Math.random() * 5)}`,
            issuingCenter: ['RIYADH_MAIN', 'JEDDAH', 'DAMMAM', 'MAKKAH'][Math.floor(Math.random() * 4)],
            chipNumber: `SA-XF-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
            maritalStatus: ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED'][Math.floor(Math.random() * 4)],
            occupation: occupations[Math.floor(Math.random() * occupations.length)],
            address: `${cities[Math.floor(Math.random() * cities.length)]} - حي ${['الروضة', 'المروج', 'الخليج', 'الربوة', 'الغدير'][Math.floor(Math.random() * 5)]}`,
            mobile: `05${Math.floor(50000000 + Math.random() * 50000000)}`,
            email: `${currentCardData.fullName.split(' ')[0].toLowerCase()}.${currentCardData.fullName.split(' ')[1].toLowerCase()}@example.com`,
            notes: 'لا يوجد ملاحظات',
            photo: currentCardData.photo,
            signature: currentCardData.signature,
            qrCode: `ID:${currentCardData.idNumber}\nName:${currentCardData.fullName}`,
            barcode: currentCardData.idNumber,
            designTheme: currentCardData.designTheme,
            rotation: currentCardData.rotation
        };
        
        updateFormData();
        updateCardDesign();
        showNotification('تم توليد بيانات عشوائية', 'success');
    }
    
    function resetCard() {
        currentCardData = {
            idNumber: '',
            fullName: '',
            nationality: 'SA',
            bloodType: 'A+',
            hijriDob: '',
            gregorianDob: '',
            pob: '',
            issueDate: '',
            expiryDate: '',
            issuingCenter: 'RIYADH_MAIN',
            chipNumber: '',
            maritalStatus: 'SINGLE',
            occupation: '',
            address: '',
            mobile: '',
            email: '',
            notes: '',
            photo: null,
            signature: null,
            qrCode: '',
            barcode: '',
            designTheme: 'default',
            rotation: 0
        };
        
        updateFormData();
        updateCardDesign();
        signaturePad.clear();
        showNotification('تم إعادة تعيين البطاقة', 'success');
    }
    
    function rotateCard() {
        currentCardData.rotation = (currentCardData.rotation + 90) % 360;
        idCard.style.transform = `rotate(${currentCardData.rotation}deg)`;
    }
    
    // --------------------------
    // وظائف الميزات المتقدمة
    // --------------------------
    function showNfcModal() {
        nfcStatus.textContent = 'جاري الاتصال...';
        nfcCardNumber.textContent = currentCardData.idNumber;
        nfcName.textContent = currentCardData.fullName;
        nfcDob.textContent = currentCardData.hijriDob + 'هـ';
        nfcCardStatus.textContent = 'نشطة';
        
        setTimeout(() => {
            nfcStatus.textContent = 'متصل';
            nfcStatus.style.color = 'var(--success-color)';
        }, 1500);
        
        nfcModal.style.display = 'flex';
    }
    
    function showBiometricModal() {
        biometricModal.style.display = 'flex';
        selectBiometricOption(document.querySelector('.bio-option[data-type="fingerprint"]'));
    }
    
    function selectBiometricOption(option) {
        bioOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        const bioType = option.getAttribute('data-type');
        
        fingerprintScanner.style.display = 'none';
        faceScanner.style.display = 'none';
        irisScanner.style.display = 'none';
        startScanBtn.style.display = 'none';
        biometricResult.style.display = 'none';
        
        switch(bioType) {
            case 'fingerprint':
                fingerprintScanner.style.display = 'block';
                startScanBtn.style.display = 'block';
                break;
            case 'face':
                faceScanner.style.display = 'block';
                startScanBtn.style.display = 'block';
                initFaceScanner();
                break;
            case 'iris':
                irisScanner.style.display = 'block';
                startScanBtn.style.display = 'block';
                break;
        }
    }
    
    function initFaceScanner() {
        // في تطبيق حقيقي، هنا سيتم تهيئة كاميرا الويب
        const faceCamera = document.getElementById('faceCamera');
        
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    faceCamera.srcObject = stream;
                })
                .catch(function(error) {
                    console.error('خطأ في الوصول إلى الكاميرا:', error);
                });
        }
    }
    
    function startBiometricScan() {
        const activeScanner = document.querySelector('.biometric-scanner[style*="display: block"]');
        const progressBar = activeScanner.querySelector('.progress-bar');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                activeScanner.style.display = 'none';
                showBiometricResult();
            }
        }, 100);
    }
    
    function showBiometricResult() {
        biometricResult.style.display = 'block';
    }
    
    function showQrModal() {
        qrTextInput.value = currentCardData.qrCode;
        qrModal.style.display = 'flex';
        generateQrPreview();
    }
    
    function generateQrPreview() {
        const text = qrTextInput.value;
        const color = qrColorInput.value;
        const size = parseInt(qrSizeInput.value);
        
        qrGeneratorPreview.innerHTML = '';
        
        QRCode.toCanvas(qrGeneratorPreview, text, { 
            width: size,
            margin: 1,
            color: {
                dark: color,
                light: '#ffffff'
            }
        }, function(error) {
            if (error) console.error(error);
        });
    }
    
    function applyQrToCard() {
        currentCardData.qrCode = qrTextInput.value;
        updateCardDesign();
        closeModal(qrModal);
        showNotification('تم تطبيق QR Code على البطاقة', 'success');
    }
    
    function generateBarcodeModal() {
        // في تطبيق حقيقي، يمكن إضافة خيارات للباركود
        generateBarcode(currentCardData.idNumber);
        showNotification('تم إنشاء Barcode جديد', 'success');
    }
    
    function encryptData() {
        // في تطبيق حقيقي، هنا سيتم تشفير البيانات
        showNotification('تم تشفير بيانات البطاقة', 'success');
    }
    
    function addWatermark() {
        // في تطبيق حقيقي، هنا سيتم إضافة علامة مائية
        showNotification('تم إضافة علامة مائية للبطاقة', 'success');
    }
    
    // --------------------------
    // وظائف محرر البيانات
    // --------------------------
    function saveFormData() {
        currentCardData.idNumber = idNumberInput.value;
        currentCardData.fullName = fullNameInput.value;
        currentCardData.nationality = nationalitySelect.value;
        currentCardData.bloodType = bloodTypeSelect.value;
        currentCardData.hijriDob = hijriDobInput.value;
        currentCardData.gregorianDob = gregorianDobInput.value;
        currentCardData.pob = pobInput.value;
        currentCardData.issueDate = issueDateInput.value;
        currentCardData.expiryDate = expiryDateInput.value;
        currentCardData.issuingCenter = issuingCenterSelect.value;
        currentCardData.chipNumber = chipNumberInput.value;
        currentCardData.maritalStatus = maritalStatusSelect.value;
        currentCardData.occupation = occupationInput.value;
        currentCardData.address = addressInput.value;
        currentCardData.mobile = mobileInput.value;
        currentCardData.email = emailInput.value;
        currentCardData.notes = notesInput.value;
        currentCardData.qrCode = `ID:${currentCardData.idNumber}\nName:${currentCardData.fullName}`;
        currentCardData.barcode = currentCardData.idNumber;
        
        updateCardDesign();
        showNotification('تم حفظ البيانات بنجاح', 'success');
    }
    
    function clearFormData() {
        if (confirm('هل أنت متأكد من مسح جميع البيانات؟')) {
            idNumberInput.value = '';
            fullNameInput.value = '';
            nationalitySelect.value = 'SA';
            bloodTypeSelect.value = 'A+';
            hijriDobInput.value = '';
            gregorianDobInput.value = '';
            pobInput.value = '';
            issueDateInput.value = '';
            expiryDateInput.value = '';
            issuingCenterSelect.value = 'RIYADH_MAIN';
            chipNumberInput.value = '';
            maritalStatusSelect.value = 'SINGLE';
            occupationInput.value = '';
            addressInput.value = '';
            mobileInput.value = '';
            emailInput.value = '';
            notesInput.value = '';
            
            photoUploadArea.innerHTML = `
                <i class="fas fa-camera"></i>
                <span>انقر لرفع الصورة</span>
                <input type="file" id="photoUploadInput" accept="image/*">
            `;
            
            currentCardData.photo = null;
            signaturePad.clear();
            currentCardData.signature = null;
            
            showNotification('تم مسح جميع البيانات', 'success');
        }
    }
    
    function validateFormData() {
        // في تطبيق حقيقي، هنا سيتم التحقق من صحة جميع البيانات
        let isValid = true;
        const requiredFields = [
            idNumberInput, fullNameInput, hijriDobInput, 
            gregorianDobInput, pobInput, issueDateInput
        ];
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--danger-color)';
                isValid = false;
            } else {
                field.style.borderColor = 'var(--border-color)';
            }
        });
        
        if (isValid) {
            showNotification('جميع البيانات صالحة', 'success');
        } else {
            showNotification('يوجد بيانات ناقصة أو غير صالحة', 'danger');
        }
        
        return isValid;
    }
    
    function handlePhotoUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                currentCardData.photo = event.target.result;
                updateCardDesign();
                
                photoUploadArea.innerHTML = `
                    <img src="${event.target.result}" alt="الصورة الشخصية">
                    <input type="file" id="photoUploadInput" accept="image/*">
                `;
            };
            reader.readAsDataURL(file);
        }
    }
    
    function clearSignaturePad() {
        signaturePad.clear();
    }
    
    function saveSignaturePad() {
        if (!signaturePad.isEmpty()) {
            currentCardData.signature = signaturePad.toDataURL();
            showNotification('تم حفظ التوقيع بنجاح', 'success');
        } else {
            showNotification('لم تقم بالتوقيع بعد', 'warning');
        }
    }
    
    // --------------------------
    // وظائف تحديث الواجهة
    // --------------------------
    function updateFormData() {
        idNumberInput.value = currentCardData.idNumber;
        fullNameInput.value = currentCardData.fullName;
        nationalitySelect.value = currentCardData.nationality;
        bloodTypeSelect.value = currentCardData.bloodType;
        hijriDobInput.value = currentCardData.hijriDob;
        gregorianDobInput.value = currentCardData.gregorianDob;
        pobInput.value = currentCardData.pob;
        issueDateInput.value = currentCardData.issueDate;
        expiryDateInput.value = currentCardData.expiryDate;
        issuingCenterSelect.value = currentCardData.issuingCenter;
        chipNumberInput.value = currentCardData.chipNumber;
        maritalStatusSelect.value = currentCardData.maritalStatus;
        occupationInput.value = currentCardData.occupation;
        addressInput.value = currentCardData.address;
        mobileInput.value = currentCardData.mobile;
        emailInput.value = currentCardData.email;
        notesInput.value = currentCardData.notes;
        
        if (currentCardData.photo) {
            photoUploadArea.innerHTML = `
                <img src="${currentCardData.photo}" alt="الصورة الشخصية">
                <input type="file" id="photoUploadInput" accept="image/*">
            `;
        }
        
        if (currentCardData.signature) {
            signaturePad.fromDataURL(currentCardData.signature);
        }
    }
    
    function updateCardFromForm() {
        saveFormData();
        updateCardDesign();
    }
    
    function updateCardDesign() {
        // تحديث البيانات الأساسية
        document.getElementById('idNumber').textContent = currentCardData.idNumber;
        document.getElementById('name').textContent = currentCardData.fullName;
        document.getElementById('nationality').textContent = currentCardData.nationality === 'SA' ? 'سعودي' : 'أخرى';
        document.getElementById('bloodType').textContent = currentCardData.bloodType;
        document.getElementById('dob').textContent = `${currentCardData.hijriDob}هـ (${formatGregorianDate(currentCardData.gregorianDob)})`;
        document.getElementById('pob').textContent = currentCardData.pob;
        document.getElementById('issueDate').textContent = `${currentCardData.issueDate}هـ`;
        document.getElementById('expiryDate').textContent = `${currentCardData.expiryDate}هـ`;
        document.getElementById('issuingCenter').textContent = getIssuingCenterName(currentCardData.issuingCenter);
        document.getElementById('maritalStatus').textContent = getMaritalStatusName(currentCardData.maritalStatus);
        document.getElementById('occupation').textContent = currentCardData.occupation;
        
        // تحديث الصورة
        const photoPlaceholder = document.querySelector('.photo-placeholder');
        if (currentCardData.photo) {
            photoPlaceholder.style.backgroundImage = `url(${currentCardData.photo})`;
            photoPlaceholder.style.backgroundSize = 'cover';
            photoPlaceholder.style.backgroundPosition = 'center';
            photoPlaceholder.querySelector('.camera-icon').style.display = 'none';
        } else {
            photoPlaceholder.style.backgroundImage = 'none';
            photoPlaceholder.style.background = 'linear-gradient(135deg, #e0e0e0, #bdbdbd)';
            photoPlaceholder.querySelector('.camera-icon').style.display = 'block';
        }
        
        // تحديث QR Code و Barcode
        generateQRCode(currentCardData.qrCode);
        generateBarcode(currentCardData.barcode);
        
        // تحديث التصميم حسب السمة المختارة
        applyDesignTheme(currentCardData.designTheme);
    }
    
    function applyDesignTheme(theme) {
        // في تطبيق حقيقي، هنا سيتم تطبيق أنماط مختلفة للبطاقة
        const card = document.querySelector('.id-card');
        
        card.classList.remove('default-theme', 'modern-theme', 'classic-theme', 'dark-theme');
        card.classList.add(`${theme}-theme`);
        
        // يمكن إضافة المزيد من التخصيصات حسب السمة
    }
    
    function generateQRCode(text) {
        const qrCode = document.getElementById('qrCode');
        qrCode.innerHTML = '';
        
        QRCode.toCanvas(qrCode, text, { 
            width: 80,
            margin: 1,
            color: {
                dark: '#1a4b7a',
                light: '#ffffff'
            }
        }, function(error) {
            if (error) console.error(error);
        });
    }
    
    function generateBarcode(number) {
        const barcode = document.getElementById('barcode');
        const barcodeNumber = document.getElementById('barcodeNumber');
        
        barcode.innerHTML = '';
        barcodeNumber.textContent = number;
        
        JsBarcode(barcode, number, {
            format: "CODE128",
            lineColor: "#1a4b7a",
            width: 1.5,
            height: 30,
            displayValue: false,
            margin: 5
        });
    }
    
    function updateDatabaseTable() {
        databaseRows.innerHTML = '';
        
        database.forEach(card => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${card.id}</td>
                <td>${card.name}</td>
                <td>${card.issueDate}</td>
                <td><span class="status-badge ${card.status === 'نشطة' ? 'active' : 'expired'}">${card.status}</span></td>
                <td>
                    <button class="table-btn edit-btn"><i class="fas fa-edit"></i></button>
                    <button class="table-btn delete-btn"><i class="fas fa-trash"></i></button>
                </td>
            `;
            
            databaseRows.appendChild(row);
        });
        
        // إضافة معالجات الأحداث للأزرار
        document.querySelectorAll('.edit-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => editCard(database[index]));
        });
        
        document.querySelectorAll('.delete-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => deleteCard(index));
        });
    }
    
    function editCard(cardData) {
        // في تطبيق حقيقي، هنا سيتم تحميل بيانات البطاقة للتعديل
        currentCardData.idNumber = cardData.id;
        currentCardData.fullName = cardData.name;
        currentCardData.issueDate = cardData.issueDate;
        
        updateFormData();
        updateCardDesign();
        showNotification('تم تحميل بيانات البطاقة للتعديل', 'success');
    }
    
    function deleteCard(index) {
        if (confirm('هل أنت متأكد من حذف هذه البطاقة؟')) {
            database.splice(index, 1);
            updateDatabaseTable();
            showNotification('تم حذف البطاقة بنجاح', 'success');
        }
    }
    
    function updatePrintPreview() {
        printPreview.innerHTML = '';
        const cardClone = idCard.cloneNode(true);
        cardClone.style.transform = 'none';
        cardClone.style.width = '100%';
        cardClone.style.height = 'auto';
        cardClone.style.maxWidth = '350px';
        cardClone.style.margin = '0 auto';
        printPreview.appendChild(cardClone);
    }
    
    function printCard() {
        // في تطبيق حقيقي، هنا سيتم إرسال البطاقة للطباعة
        showNotification('تم إرسال البطاقة للطباعة', 'success');
        closeModal(printModal);
    }
    
    function printToPDF() {
        // في تطبيق حقيقي، هنا سيتم تصدير البطاقة كملف PDF
        showNotification('تم تصدير البطاقة كملف PDF', 'success');
        closeModal(printModal);
    }
    
    function simulateSecurityCheck() {
        let passedChecks = 0;
        const checks = document.querySelectorAll('.check-item');
        
        checks.forEach((check, index) => {
            setTimeout(() => {
                const icon = check.querySelector('.check-icon');
                icon.classList.remove('pending');
                
                // محاكاة نجاح أو فشل عشوائي (80% نجاح)
                const isPassed = Math.random() > 0.2;
                
                if (isPassed) {
                    icon.classList.add('success');
                    icon.innerHTML = '<i class="fas fa-check"></i>';
                    passedChecks++;
                } else {
                    icon.classList.add('failed');
                    icon.innerHTML = '<i class="fas fa-times"></i>';
                }
                
                // إذا كانت هذه هي الأخيرة، عرض النتيجة
                if (index === checks.length - 1) {
                    setTimeout(() => {
                        securityChecks.forEach(c => c.style.display = 'none');
                        securityResult.style.display = 'block';
                        checksPassed.textContent = passedChecks;
                        
                        if (passedChecks === checks.length) {
                            resultMessage.textContent = 'البطاقة أصلية وجميع عناصر الأمان صحيحة';
                        } else {
                            resultMessage.textContent = 'تم اكتشاف بعض المشاكل في عناصر الأمان';
                            resultMessage.style.color = 'var(--danger-color)';
                        }
                    }, 500);
                }
            }, index * 1000);
        });
    }
    
    // --------------------------
    // وظائف مساعدة
    // --------------------------
    function formatGregorianDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-SA');
    }
    
    function getIssuingCenterName(code) {
        const centers = {
            'RIYADH_MAIN': 'الرياض - المركز الرئيسي',
            'JEDDAH': 'جدة - فرع الغربية',
            'DAMMAM': 'الدمام - فرع الشرقية',
            'MAKKAH': 'مكة المكرمة - فرع العاصمة المقدسة'
        };
        return centers[code] || code;
    }
    
    function getMaritalStatusName(code) {
        const statuses = {
            'SINGLE': 'أعزب',
            'MARRIED': 'متزوج',
            'DIVORCED': 'مطلق',
            'WIDOWED': 'أرمل'
        };
        return statuses[code] || code;
    }
    
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-times-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    function closeModal(modal) {
        modal.style.display = 'none';
        
        // إيقاف كاميرا الويب إذا كانت تعمل
        const faceCamera = document.getElementById('faceCamera');
        if (faceCamera && faceCamera.srcObject) {
            faceCamera.srcObject.getTracks().forEach(track => track.stop());
            faceCamera.srcObject = null;
        }
    }
    
    function switchTab(button) {
        const tabId = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }
    
    function switchEditorTab(tab) {
        const editorId = tab.getAttribute('data-editor');
        
        editorTabs.forEach(t => t.classList.remove('active'));
        editorContents.forEach(content => content.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(editorId).classList.add('active');
    }
    
    // --------------------------
    // تهيئة التطبيق
    // --------------------------
    initApp();
});
