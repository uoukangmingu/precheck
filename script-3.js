﻿let count = 1;
const ticketCount = document.getElementById('ticketCount');
const totalPriceElement = document.getElementById('totalPrice');
const ticketPrice = 6000;
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const buyBtn = document.getElementById('buyBtn');

decreaseBtn.disabled = true;

const links = [
'https://payapplite.com/l/TPxaSC',
'https://payapplite.com/l/f0mSAx',
'https://payapplite.com/l/4NE66Z',
'https://payapplite.com/l/jsPuyg',
'https://payapplite.com/l/kg1U6T',
'https://payapplite.com/l/iEfWe3',
'https://payapplite.com/l/qGT2ZX',
'https://payapplite.com/l/jeMKtW',
'https://payapplite.com/l/PmYqp6',
'https://payapplite.com/l/N33wRb'
];

function updateCount() {
    ticketCount.textContent = `${count}장`;
    ticketCount.style.transform = 'scale(1.1)';
    setTimeout(() => {
        ticketCount.style.transform = 'scale(1)';
    }, 200);
    updateTotalPrice();
}


function updateTotalPrice() {
    const totalPrice = count * ticketPrice;
    totalPriceElement.textContent = `총 금액: ${totalPrice.toLocaleString()}원`;
}


const MAX_TICKETS = 10;

increaseBtn.addEventListener('click', () => {
    if (count < MAX_TICKETS) {
        count++;
        updateCount();
    }
    if (count === MAX_TICKETS) {
        increaseBtn.disabled = true;
    }
    decreaseBtn.disabled = false;
});

decreaseBtn.addEventListener('click', () => {
    if (count > 1) {
        count--;
        updateCount();
    }
    if (count === 1) {
        decreaseBtn.disabled = true;
    }
    increaseBtn.disabled = false;
});


updateTotalPrice();

buyBtn.addEventListener('click', () => {
    if (confirm(`[✅필수 확인❗❗❗]\n9월 21일(토) [14:00]\n${count}장의 티켓을 구매 하십니까?`)) {
        window.open(links[count - 1], '_blank', 'width=500,height=600');
    }
});


const sliderImage = document.querySelector('.slider-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.slider-dots');
let currentImage = 1;

for (let i = 1; i <= 5; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentImage = i;
        updateImage();
    });
    dotsContainer.appendChild(dot);
}

function updateImage() {
    sliderImage.src = `${currentImage}.png`;
    // 점 업데이트
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentImage);
    });
}

updateImage();

prevBtn.addEventListener('click', () => {
    currentImage = currentImage > 1 ? currentImage - 1 : 5;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImage = currentImage < 5 ? currentImage + 1 : 1;
    updateImage();
});


let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(() => {
        currentImage = currentImage < 5 ? currentImage + 1 : 1;
        updateImage();
    }, 3000); // 5초마다 이미지 변경
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// 슬라이더에 마우스를 올리면 자동 슬라이드 멈춤
document.querySelector('.slider').addEventListener('mouseenter', stopSlideShow);
// 슬라이더에서 마우스가 벗어나면 자동 슬라이드 재시작
document.querySelector('.slider').addEventListener('mouseleave', startSlideShow);

// 페이지 로드 시 자동 슬라이드 시작
startSlideShow();

sliderImage.onerror = function() {
    console.error('이미지 로딩 실패:', this.src);
    this.src = 'error-image.png'; // 에러 시 표시할 기본 이미지
};

const discountBtn = document.getElementById('discountBtn');
const discountPopup = document.getElementById('discountPopup');
const closeBtn = document.getElementsByClassName('close')[0];
const applyDiscountBtn = document.getElementById('applyDiscount');

discountBtn.onclick = function() {
    discountPopup.style.display = "block";
}

closeBtn.onclick = function() {
    discountPopup.style.display = "none";
}

applyDiscountBtn.onclick = function() {
    const discountCode = document.getElementById('discountCode').value;
    if(discountCode === "1978") {
        window.location.href = 'discount.html';
    } else {
        alert("유효하지 않은 할인 코드입니다.");
    }
}

window.onclick = function(event) {
    if (event.target == discountPopup) {
        discountPopup.style.display = "none";
    }
}

window.addEventListener('load', function() {
  window.scrollTo(0, document.body.scrollHeight);
});

window.addEventListener('hashchange', function() {
  window.scrollTo(0, document.body.scrollHeight);
});
