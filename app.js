document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.open-modal');
    const modal = document.querySelector('.modal');
    const innerModal = document.querySelector('.inner-modal');
    const closeIcon = document.querySelector('.fa-xmark');
    const closeButton = document.querySelector('.footer');

    // Hàm mở modal
    openModalBtn.addEventListener('click', () => {
        modal.classList.remove('hide');
        innerModal.classList.remove('hide');
        innerModal.style.animation = 'modalshow 0.2s linear'; // Sử dụng animation mở
    });

    // Hàm đóng modal
    const closeModal = () => {
        innerModal.style.animation = 'modalhide 0.2s linear'; // Thêm hiệu ứng đóng
        setTimeout(() => {
            modal.classList.add('hide');
            innerModal.classList.add('hide');
        }, 200); // Sau khi animation hoàn thành thì ẩn modal
    };

    // Đóng modal khi bấm vào icon x
    closeIcon.addEventListener('click', closeModal);

    // Đóng modal khi bấm vào nút Close
    closeButton.addEventListener('click', closeModal);
});
