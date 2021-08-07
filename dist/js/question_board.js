const prompt = document.querySelector('.question h2')
const btn_hint = document.querySelector('.hint .btn_hint')
const txt_hint = document.querySelector('.hint small')
const answers = document.querySelectorAll('.answers div .ans')
const ans_boxes = document.querySelectorAll('.answers div')
const btn_prev = document.querySelector('button.prev')
const btn_next = document.querySelector('button.next')

// Index of the current question
let currQues = 0;

// An array to store all the questions and their answers
let questionList = [];

// An array to store the result of the user's choice ( indicate if his/her choice is corrcect or not )
export let ans_check = [];

// Create Question class
class Question {
    constructor(prompt, ansList, correctAns, hint) {
        this.prompt = prompt;
        this.ansList = ansList;
        this.correctAns = correctAns;
        this.hint = hint;
        this.showHint = false;
    } 

    display() {
        prompt.innerText = this.prompt;
        for ( let i = 0; i < 4; i ++ ) {
            answers[i].innerText = this.ansList[i];
        }
        txt_hint.innerText = this.hint;
        if ( this.showHint == true ) {
            txt_hint.style.display = 'inline';
        } else {
            txt_hint.style.display = 'none';
        }
    }

}

// Function to hightlight the answer that is clicked
export function hightlightClickedAndCheckAnswer() {

    ans_boxes.forEach( ans_box => {
        ans_box.addEventListener('click', e => {
            ans_boxes.forEach( box => {
                box.classList.remove('chosen')
            })
            e.currentTarget.classList.add('chosen')
            if ( e.currentTarget.classList.contains(questionList[currQues].correctAns) ) ans_check[currQues] = true;
            else ans_check[currQues] = false;
        })
    })

}

// Function to show hint when user click the hint button
export function showHint() {
    btn_hint.addEventListener( 'click', () => {
        questionList[currQues].showHint = true;
        displayQuestion();
    })
}

// Function to initialize a list of question
export function createQuestionList( title ) {
    questionList = []
    ans_check = []
    if ( title == 'Easy' ) {
        questionList.push(new Question("Con vật nào to nhất thế giới", ["Cá voi xanh", "Cá mập", "voi", "Hổ"], 'A', "Con vật này sống dưới nước") );
        questionList.push(new Question("Nhân tố nào làm cho lá cây có màu xanh?", ["Mô giậu", "Diệp lục", "Không bào", "Khí khổng"], 'B', "Nó nằm trong lục lạp") );
        questionList.push(new Question("Con vật nào chạy nhanh nhất thế giới", ["Đà điểu", "Lươn", "Báo", "Mèo"], 'C', "Con vật này có 4 chân") );
        questionList.push(new Question("Con nào biết bơi", ["Đà điểu", "Hổ", "Mèo", "Thạch sùng"], 'B', "Con vật này có sọc") );
        questionList.push(new Question("Ai là người giàu nhất việt nam", ["Phạm Quang Minh", "Phạm Nhật Vượng", "Bill Gates", "Thanh Thảo"], 'B', "Người này có 2 chân") );
        questionList.push(new Question("Tòa nhà nào cao nhất việt nam", ["Mường Thanh", "Landmark 72", "BURJ KHALIFA", "Landmark 81"], 'D', "Tòa nhà này ở thành phố hồ chí minh") );
        questionList.push(new Question("Đâu là tên của 1 loại laptop", ["Iphone X", "Samsung galaxy s10", "Dell XPS 15", "Toshiba"], 'C', "Loại đáp án D") );
        questionList.push(new Question("Có bao nhiêu cung hoàng đạo", ["50", "100", "12", "10"], 'C', "Số này bé hơn 20") );
        questionList.push(new Question("Có bao nhiêu ngày trong năm nhuận", ["300", "367", "365", "366"], 'D', "Số này lớn hơn 365") );
        questionList.push(new Question("Nước sôi ở bao nhiêu độ C ở áp suất 1 atm", ["100", "200", "80", "50"], 'A', "Số này lớn hơn 90") );
    } 
    if ( title == 'Medium' ) {
        questionList.push(new Question("Vị vua cuối cùng của chế độ phong kiến nước ta là ai?", ["Khải Định", "Hàm Nghi", "Đinh Bộ Lĩnh", "Bảo Đại"], 'D', "Người này có vợ người Pháp") );
        questionList.push(new Question("Đỉnh núi nào cao nhất thế giới", ["Everest", "Phan xi păng", "Kanchenjunga", "Dhaulagiri"], 'A', "Đỉnh này nằm trên dãy núi Himalaya") );
        questionList.push(new Question("Loài bò sát lớn nhất thế giới là?", ["Hươu cao cổ", "Rồng Komodo", "Cá sấu nước mặn", "Thạch sùng"], 'C', "Con vật này sống ở đầm lầy") );
        questionList.push(new Question("Ai là tổng thống đầu tiên của nước Mỹ", ["Obama", "Washington", "Lincoln", "Bush"], 'B', "Người này hồi bé từng chặt cây anh đào và suýt bị cha mắng") );
        questionList.push(new Question("Ai là người phát minh ra máy hát đĩa?", ["Elon Musk", "Fabre", "Edison", "Larry Page"], 'C', "Người này cũng phát minh ra bóng đèn") );
        questionList.push(new Question("Hành tinh nào trong hệ mặt trời gần mặt trời nhất?", ["Sao kim", "Sao Hỏa", "Trái Đất", "Sao Thủy"], 'D', "Hành tinh nãy cũng là hành tinh nhỏ nhất hệ mặt trời") );
        questionList.push(new Question("Đâu là tên của vụ nổ hình thành nên vũ trụ?", ["Big Bang", "Moscow", "FOAB", "Gamma"], 'A', "Vụ nổ này có trong tên của một series phim nổi tiếng") );
        questionList.push(new Question("Bộ phận nào sau đây được coi là bộ não máy tính", ["Quạt", "CPU", "Ổ cứng", "Thanh Ram"], 'B', "Tên tiếng anh của nó là Central Processing Unit") );
        questionList.push(new Question("Trong Conan, tổ chức nào làm cho shinichi bị thu nhỏ", ["Áo trắng", "CIA", "FBI", "Áo đen"], 'D', "Tên của tổ chức có chứa màu sắc") );
        questionList.push(new Question("Con người tiến hóa từ loài nào?", ["Khỉ đột", "Khủng long", "Đà điểu", "Vượn cổ"], 'D', "Con vật nầy có hình dáng giống người") );
    }
    if ( title == 'Hard' ) {
        questionList.push(new Question("Ai là người nghĩ ra thuyết tương đối?", ["Einstein", "Nicolas Tesla", "Kenedy", "Newton"], 'A', "Người này nghĩ ra công thức E = mc2") );
        questionList.push(new Question("Màu sắc nào là hiếm nhát trong tự nhiên?", ["Tím", "Đỏ", "Xanh da trời", "Xanh lá cây"], 'C', "Đây là màu của một loài bướm nổi tiếng tên Morpho") );
        questionList.push(new Question("Tia nào sau đây dùng để chữa bệnh còi xương", ["Tia tử ngoại", "Tia gamma", "Tia X", "Tia sáng xanh"], 'A', "Tia này có bước sóng nhỏ thứ nhì trong các tia đã cho") );
        questionList.push(new Question("Tên của bệnh nào sau đây làm người ta lão hóa rất nhanh", ["leukemia", "covid-19", "progria", "Lao"], 'C', "Bệnh này cực hiếm gặp") );
        questionList.push(new Question("Loại ARN nào có chức năng vận chuyển axit amin", ["tARN", "mARN", "rARN", "Polipeptit"], 'A', "Tên của nó có chữ ARN") );
        questionList.push(new Question("Đại nào là đại lâu đời nhất?", ["Đại cổ sinh", "Đại Thái Cổ", "Đại Nguyên Sinh", "Đại Trung Sinh"], 'B', "Tên của đại này thể hiện sự lâu đời của nó") );
        questionList.push(new Question("Ai là người tạo ra ngôn ngữ Basics?", ["John G. Kemeny", "James Gosling", "Bjarne Stroustrup", "Hilary Clinton"], 'A', "Ông này ngỏm rồi") );
        questionList.push(new Question("Liên Xô chế tạo thành công bom nguyên tử vào thời gian nào?", ["1920", "1949", "1820", "2000"], 'B', "4 năm sau khi Mỹ ném bom xuống Nagasaki") );
        questionList.push(new Question("Con vật nào sau đây có thể gây ra lực tấn công 15000 newtons", ["Sư tử", "Gấu", "Tôm tít", "Chim đại bàng"], 'C', "Con vật này nhỏ hơn rất nhiều sao với sức sát thương nó gây ra") );
        questionList.push(new Question("1 Mach = bao nhiêu m/s?", ["1000", "100", "343", "256"], 'C', "Nó chính là tốc độ âm thanh") );
    }
}

// Function to display the question in the array onto the question board
export function displayQuestion() {
    questionList[currQues].display();
}

// Function to change to the next question when the right arrow button is clicked
export function nextQuiz() {
    btn_next.addEventListener('click', () => {
        if ( currQues == questionList.length - 1 ) return;
        currQues ++;
        displayQuestion();
        ans_boxes.forEach( box => {
            box.classList.remove('chosen')
        })
    })
}

// Function to change to the previous question when the left arrow button is clicked
export function prevQuiz() {
    btn_prev.addEventListener('click', () => {
        if ( currQues == 0 ) return;
        currQues --;
        displayQuestion();
        ans_boxes.forEach( box => {
            box.classList.remove('chosen')
        })
    })
}

