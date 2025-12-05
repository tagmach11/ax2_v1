
        // URL에서 비디오 ID 가져오기
        const urlParams = new URLSearchParams(window.location.search);
        const videoId = urlParams.get('id');

        let currentVideo = null;
        let transcriptions = [];
        let currentLang = 'ko';
        let isPlaying = false;
        let currentTime = 0;
        let videoDuration = 59; // 초 단위

        // 데이터 로드
        function loadVideoData() {
            const savedVideos = JSON.parse(localStorage.getItem('savedVideos') || '[]');
            currentVideo = savedVideos.find(v => v.id === videoId);
            
            if (!currentVideo) {
                alert('강의를 찾을 수 없습니다.');
                window.location.href = 'mypage.html';
                return;
            }

            // 제목 설정
            document.getElementById('video-title').value = currentVideo.title || '강의 제목';

            // 샘플 트랜스크립션 데이터 생성
            transcriptions = currentVideo.transcriptions || generateSampleTranscriptions();
            
            renderTranscriptions();
        }

        // 샘플 트랜스크립션 생성
        function generateSampleTranscriptions() {
            return [
                {
                    id: 1,
                    speaker: '화자 1',
                    startTime: 0,
                    endTime: 3.41,
                    korean: '이 과자의 정체가 뭔지 아시는 분이 계시다면 제발 한 번만 도와주세요.',
                    english: 'If anyone knows what this snack is, please, just help me out, for once.'
                },
                {
                    id: 2,
                    speaker: '화자 1',
                    startTime: 3,
                    endTime: 9,
                    korean: '제가 저번에 두바이 초콜릿 맛을 과자를 하나를 얻어먹었는데 이게 이렇게 맛있을 줄 모르고 아무 데도 없이 껍데기를 버린 거예요.',
                    english: 'I tried a Dubai chocolate-flavored snack the other day, but I had no idea it would be this good, so I threw away the wrapper without thinking.'
                },
                {
                    id: 3,
                    speaker: '화자 1',
                    startTime: 9,
                    endTime: 15,
                    korean: '제가 기억하는 그 과자 맛을 똑같이 재현을 해볼게요. 먼저 이렇게 둥글고 짤막한 웨이퍼 재질의 과자였거든요.',
                    english: "I'll try to recreate the snack exactly as I remember. First, it was a round, short, wafer-textured snack."
                },
                {
                    id: 4,
                    speaker: '화자 1',
                    startTime: 15,
                    endTime: 19,
                    korean: '지금 여기에는 커피 크림이 채워져 있는데 그 과자에는 피스타치오 맛 크림이 채워져 있었거든요.',
                    english: 'Now, this one is filled with coffee cream, but that snack had a pistachio cream filling.'
                },
                {
                    id: 5,
                    speaker: '화자 1',
                    startTime: 19,
                    endTime: 23.10,
                    korean: '그래서 오늘은 피스타치오 맛 크림을 만들어서 이 과자에 채워넣어 볼게요.',
                    english: 'So today, I\'ll make a pistachio cream and fill this snack with it.'
                }
            ];
        }

        // 트랜스크립션 렌더링
        function renderTranscriptions() {
            const list = document.getElementById('transcription-list');
            
            list.innerHTML = transcriptions.map(segment => {
                const duration = (segment.endTime - segment.startTime).toFixed(2);
                const startTime = formatTime(segment.startTime);
                const endTime = formatTime(segment.endTime);
                
                return `
                    <div class="transcription-item" data-segment-id="${segment.id}">
                        <div class="segment-header">
                            <div class="speaker-icon">${segment.speaker.charAt(segment.speaker.length - 1)}</div>
                            <span class="speaker-name">${segment.speaker}</span>
                            <span class="timestamp">${startTime} - ${endTime} ${duration}sec</span>
                        </div>
                        <div class="text-content">
                            <div class="text-editor">
                                <div class="text-label">Korean</div>
                                <textarea class="text-input" data-lang="ko" data-segment-id="${segment.id}">${segment.korean}</textarea>
                            </div>
                            <div class="arrow-icon">→</div>
                            <div class="text-editor">
                                <div class="text-label">English</div>
                                <textarea class="text-input" data-lang="en" data-segment-id="${segment.id}">${segment.english}</textarea>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            // 텍스트 입력 이벤트
            document.querySelectorAll('.text-input').forEach(input => {
                input.addEventListener('input', function() {
                    const segmentId = parseInt(this.dataset.segmentId);
                    const lang = this.dataset.lang;
                    const segment = transcriptions.find(s => s.id === segmentId);
                    
                    if (segment) {
                        segment[lang === 'ko' ? 'korean' : 'english'] = this.value;
                    }
                });
            });
        }

        // 시간 포맷
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            const ms = Math.floor((seconds % 1) * 100);
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
        }

        // 언어 탭 전환
        document.querySelectorAll('.lang-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentLang = this.dataset.lang;
                // 언어에 따른 필터링 로직 추가 가능
            });
        });

        // 비디오 탭 전환
        document.querySelectorAll('.video-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.video-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const tabType = this.dataset.tab;
                // 탭에 따른 비디오 모드 변경 로직 추가 가능
            });
        });

        // 재생 버튼
        document.getElementById('play-btn').addEventListener('click', function() {
            isPlaying = !isPlaying;
            this.textContent = isPlaying ? '⏸' : '▶';
            // 실제 비디오 재생 로직 추가
        });

        // 진행 바 클릭
        document.getElementById('progress-bar').addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            currentTime = videoDuration * percent;
            updateProgress();
            // 실제 비디오 시간 이동 로직 추가
        });

        // 진행 상태 업데이트
        function updateProgress() {
            const percent = (currentTime / videoDuration) * 100;
            document.getElementById('progress-fill').style.width = percent + '%';
            document.getElementById('time-display').textContent = formatTimeDisplay(currentTime);
        }

        // 시간 표시 포맷
        function formatTimeDisplay(seconds) {
            const hours = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = Math.floor(seconds % 60);
            return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // 변경사항 적용
        function applyChanges() {
            if (!currentVideo) return;

            // 제목 저장
            currentVideo.title = document.getElementById('video-title').value;

            // 트랜스크립션 저장
            currentVideo.transcriptions = transcriptions;
            currentVideo.updatedAt = new Date().toISOString();

            // 로컬 스토리지에 저장
            const savedVideos = JSON.parse(localStorage.getItem('savedVideos') || '[]');
            const index = savedVideos.findIndex(v => v.id === videoId);
            if (index !== -1) {
                savedVideos[index] = currentVideo;
                localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
            }

            alert('변경사항이 적용되었습니다!');
        }

        // 초기화
        if (videoId) {
            loadVideoData();
        } else {
            alert('강의 ID가 없습니다.');
            window.location.href = 'mypage.html';
        }
    