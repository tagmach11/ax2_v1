
        // 언어별 텍스트 데이터
        const translations = {
            'KO': {
                'main-headline': '만들고, 번역하고, 소통하세요',
                'sub-headline': '한 번의 클릭으로 언어의 장벽을 넘어보세요',
                'tagline': '고품질 영상, 촬영 불필요 - 간단한 클릭 한 번으로 복제하고 번역하세요.',
                'feature1': '실시간 음성 인식 및 번역',
                'feature2': '다국어 자막 자동 생성',
                'feature3': '강의 자동 저장 및 관리',
                'feature4': '간편한 공유 및 다운로드',
                'welcome-title': 'AX2에 오신 것을 환영합니다',
                'welcome-subtitle': '한 번의 클릭으로 언어를 넘어서세요',
                'google-btn': 'Google로 시작하기',
                'kakao-btn': '카카오톡으로 시작하기',
                'naver-btn': '네이버로 시작하기',
                'or': '또는',
                'email-placeholder': '이메일을 입력해 주세요.',
                'email-error': '올바른 이메일 주소를 입력해주세요.',
                'continue-btn': '계속',
                'signup-question': '아직 계정이 없으신가요?',
                'signup-link': '무료 회원가입',
                'success-message': '로그인 성공! 강의 페이지로 이동합니다...',
                'login-error': '로그인 중 오류가 발생했습니다. 다시 시도해주세요.'
            },
            'EN': {
                'main-headline': 'Create, Translate, and Interact',
                'sub-headline': 'One click to break language barriers',
                'tagline': 'High-Quality Videos, No Filming Needed - Clone and Translate with One Simple Click.',
                'feature1': 'Real-time Voice Recognition & Translation',
                'feature2': 'Automatic Multilingual Subtitle Generation',
                'feature3': 'Automatic Lecture Storage & Management',
                'feature4': 'Easy Sharing & Download',
                'welcome-title': 'Welcome to AX2',
                'welcome-subtitle': 'Transcend Languages with One Click',
                'google-btn': 'Continue with Google',
                'kakao-btn': 'Continue with Kakao',
                'naver-btn': 'Continue with Naver',
                'or': 'OR',
                'email-placeholder': 'Enter your email',
                'email-error': 'Please enter a valid email address.',
                'continue-btn': 'Continue',
                'signup-question': "Don't have an account yet?",
                'signup-link': 'Free Sign Up',
                'success-message': 'Login successful! Redirecting to lecture page...',
                'login-error': 'An error occurred during login. Please try again.'
            },
            'JA': {
                'main-headline': 'Create, Translate, and Interact',
                'sub-headline': 'ワンクリックで言語の壁を越える',
                'tagline': '高品質な動画、撮影不要 - ワンクリックで複製・翻訳',
                'feature1': 'リアルタイム音声認識と翻訳',
                'feature2': '多言語字幕の自動生成',
                'feature3': '講義の自動保存と管理',
                'feature4': '簡単な共有とダウンロード',
                'welcome-title': 'AX2へようこそ',
                'welcome-subtitle': 'ワンクリックで言語を超越',
                'google-btn': 'Googleで始める',
                'kakao-btn': 'カカオトークで始める',
                'naver-btn': 'ネイバーで始める',
                'or': 'または',
                'email-placeholder': 'メールアドレスを入力してください',
                'email-error': '有効なメールアドレスを入力してください。',
                'continue-btn': '続ける',
                'signup-question': 'まだアカウントをお持ちでないですか？',
                'signup-link': '無料会員登録',
                'success-message': 'ログイン成功！講義ページに移動します...',
                'login-error': 'ログイン中にエラーが発生しました。再度お試しください。'
            },
            'ZH': {
                'main-headline': 'Create, Translate, and Interact',
                'sub-headline': '一键打破语言障碍',
                'tagline': '高质量视频，无需拍摄 - 一键克隆和翻译',
                'feature1': '实时语音识别和翻译',
                'feature2': '多语言字幕自动生成',
                'feature3': '课程自动保存和管理',
                'feature4': '便捷的共享和下载',
                'welcome-title': '欢迎使用 AX2',
                'welcome-subtitle': '一键超越语言',
                'google-btn': '使用 Google 继续',
                'kakao-btn': '使用 Kakao 继续',
                'naver-btn': '使用 Naver 继续',
                'or': '或',
                'email-placeholder': '请输入您的邮箱',
                'email-error': '请输入有效的邮箱地址。',
                'continue-btn': '继续',
                'signup-question': '还没有账户？',
                'signup-link': '免费注册',
                'success-message': '登录成功！正在跳转到课程页面...',
                'login-error': '登录过程中发生错误。请重试。'
            }
        };

        // 언어 선택기
        const languageSelector = document.getElementById('language-selector');
        const languageDropdown = document.getElementById('language-dropdown');
        const currentLangSpan = document.getElementById('current-lang');
        const languageOptions = document.querySelectorAll('.language-option');
        
        let currentLang = 'KO';

        // 페이지 번역 함수
        function translatePage(lang) {
            const langData = translations[lang];
            if (!langData) return;

            // 모든 data-i18n 속성을 가진 요소 번역
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (langData[key]) {
                    element.textContent = langData[key];
                }
            });

            // placeholder 번역
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (langData[key]) {
                    element.placeholder = langData[key];
                }
            });
        }

        // 언어 선택기 토글
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // 언어 옵션 선택
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.dataset.lang;
                currentLang = lang;
                currentLangSpan.textContent = lang;
                
                // 활성 상태 업데이트
                languageOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                languageDropdown.classList.remove('show');
                
                // 페이지 번역
                translatePage(lang);
            });
        });

        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', function() {
            languageDropdown.classList.remove('show');
        });

        // 이메일 검증
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // 에러 표시
        function showError(input, message) {
            input.classList.add('error');
            const errorDiv = document.getElementById('email-error');
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
        }

        // 에러 제거
        function clearError(input) {
            input.classList.remove('error');
            document.getElementById('email-error').classList.remove('show');
        }

        // 로딩 상태 설정
        function setLoading(button, isLoading) {
            if (isLoading) {
                button.classList.add('loading');
                button.disabled = true;
            } else {
                button.classList.remove('loading');
                button.disabled = false;
            }
        }

        // 성공 메시지 표시
        function showSuccessMessage(messageKey) {
            const successMsg = document.getElementById('success-message');
            const message = translations[currentLang][messageKey] || translations['KO'][messageKey];
            successMsg.textContent = message;
            successMsg.classList.add('show');
            
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 3000);
        }

        // 소셜 로그인 함수들
        async function loginWithGoogle() {
            const btn = event.target.closest('.social-btn');
            setLoading(btn, true);
            
            try {
                console.log('Google 로그인 시작');
                // 실제 구현 시 Google OAuth 연동
                // const response = await fetch('/auth/google');
                
                // 시뮬레이션: 1초 대기
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // 성공 메시지 표시
                showSuccessMessage('success-message');
                
                // 성공 시 강의 페이지로 이동
                setTimeout(() => {
                    window.location.href = 'lecture.html';
                }, 1500);
            } catch (error) {
                console.error('Google 로그인 오류:', error);
                alert(translations[currentLang]['login-error']);
            } finally {
                setLoading(btn, false);
            }
        }

        async function loginWithKakao() {
            const btn = event.target.closest('.social-btn');
            setLoading(btn, true);
            
            try {
                console.log('카카오톡 로그인 시작');
                // 실제 구현 시 카카오톡 OAuth 연동
                // const response = await fetch('/auth/kakao');
                
                // 시뮬레이션: 1초 대기
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // 성공 메시지 표시
                showSuccessMessage('카카오톡 로그인 성공! 강의 페이지로 이동합니다...');
                
                // 성공 시 강의 페이지로 이동
                setTimeout(() => {
                    window.location.href = 'lecture.html';
                }, 1500);
            } catch (error) {
                console.error('카카오톡 로그인 오류:', error);
                alert(translations[currentLang]['login-error']);
            } finally {
                setLoading(btn, false);
            }
        }

        async function loginWithNaver() {
            const btn = event.target.closest('.social-btn');
            setLoading(btn, true);
            
            try {
                console.log('네이버 로그인 시작');
                // 실제 구현 시 네이버 OAuth 연동
                // const response = await fetch('/auth/naver');
                
                // 시뮬레이션: 1초 대기
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // 성공 메시지 표시
                showSuccessMessage('네이버 로그인 성공! 강의 페이지로 이동합니다...');
                
                // 성공 시 강의 페이지로 이동
                setTimeout(() => {
                    window.location.href = 'lecture.html';
                }, 1500);
            } catch (error) {
                console.error('네이버 로그인 오류:', error);
                alert(translations[currentLang]['login-error']);
            } finally {
                setLoading(btn, false);
            }
        }

        // 이메일 로그인
        async function handleEmailLogin(event) {
            event.preventDefault();
            const emailInput = document.getElementById('email-input');
            const continueBtn = document.getElementById('continue-btn');
            const email = emailInput.value.trim();
            
            // 에러 제거
            clearError(emailInput);
            
            // 이메일 검증
            if (!email) {
                showError(emailInput, '이메일을 입력해주세요.');
                return;
            }
            
            if (!validateEmail(email)) {
                showError(emailInput, '올바른 이메일 주소를 입력해주세요.');
                return;
            }
            
            // 로딩 시작
            setLoading(continueBtn, true);
            
            try {
                console.log('이메일 로그인:', email);
                // 실제 구현 시 이메일 인증 또는 로그인 처리
                // const response = await fetch('/auth/email', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ email })
                // });
                
                // 시뮬레이션: 1.5초 대기
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // 성공 메시지 표시
                showSuccessMessage('success-message');
                
                // 성공 시 강의 페이지로 이동
                setTimeout(() => {
                    window.location.href = 'lecture.html';
                }, 1500);
            } catch (error) {
                console.error('이메일 로그인 오류:', error);
                showError(emailInput, '로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
            } finally {
                setLoading(continueBtn, false);
            }
        }

        // 이메일 입력 시 실시간 검증
        document.getElementById('email-input').addEventListener('input', function() {
            if (this.value.trim()) {
                clearError(this);
            }
        });

        // 회원가입 표시
        function showSignup() {
            event.preventDefault();
            window.location.href = 'signup.html';
        }

        // 닫기 버튼
        function closeWindow() {
            if (window.opener) {
                window.close();
            } else {
                if (confirm('로그인을 취소하시겠습니까?')) {
                    window.location.href = 'lecture.html';
                }
            }
        }

        // DOM 로드 시 한국어로 초기화
        document.addEventListener('DOMContentLoaded', function() {
            translatePage('KO');
        });

        // 페이지 로드 시 애니메이션
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s';
                document.body.style.opacity = '1';
            }, 100);
        });
    