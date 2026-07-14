const API_URL = "https://dummyjson.com/products";
let params = {
    q: "",
    limit: 10,
    skip: 0,
    sortBy: "",
    order: "",
};

const sortConfig = {
    "price-asc": { sortBy: "price", order: "asc" },
    "price-desc": { sortBy: "price", order: "desc" },
    "title-asc": { sortBy: "title", order: "asc" },
    "title-desc": { sortBy: "title", order: "desc" },
};

const productListTbl = document.getElementById("productList");
const totalCountEl = document.getElementById("totalCount");
const paginationEl = document.getElementById("pagination");
const btnSearch = document.getElementById("btnSearch");
const titleSearchEl = document.getElementById("titleSearch");
const sortMethodEl = document.getElementById("sortMethod");
const productModal = document.getElementById("productModal");

const renderTableSpinner = () => {
    productListTbl.innerHTML = `
    <tr class="">
        <td
            colspan="5"
            class="border border-gray-300 px-3 py-3 text-center"
        >
            <div
                class="inline-flex"
                role="status"
                aria-label="loading"
            >
                <svg
                    class="animate-spin size-6 shrink-0 text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                    >
                        <path
                            d="M12 2.75V5.25"
                            opacity="0.15"
                        />
                        <path
                            d="M16.95 4.08L15.7 6.25"
                            opacity="0.22"
                        />
                        <path
                            d="M19.92 7.05L17.75 8.3"
                            opacity="0.32"
                        />
                        <path
                            d="M21.25 12H18.75"
                            opacity="0.42"
                        />
                        <path
                            d="M19.92 16.95L17.75 15.7"
                            opacity="0.54"
                        />
                        <path
                            d="M16.95 19.92L15.7 17.75"
                            opacity="0.66"
                        />
                        <path
                            d="M12 21.25V18.75"
                            opacity="0.78"
                        />
                        <path
                            d="M7.05 19.92L8.3 17.75"
                            opacity="0.9"
                        />
                        <path
                            d="M4.08 16.95L6.25 15.7"
                            opacity="1"
                        />
                        <path
                            d="M2.75 12H5.25"
                            opacity="0.86"
                        />
                        <path
                            d="M4.08 7.05L6.25 8.3"
                            opacity="0.7"
                        />
                        <path
                            d="M7.05 4.08L8.3 6.25"
                            opacity="0.5"
                        />
                    </g>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <p class="text-center text-gray-500">
                Loading...
            </p>
        </td>
    </tr>
    `;
};

const renderProducts = (products) => {
    productListTbl.innerHTML = products
        .map((product) => {
            const { id, title, price, category, images } = product;
            return `
                    <tr class="bg-gray-200">
                        <td class="border border-gray-300 px-3 ">
                            ${title}
                        </td>
                        <td class="border border-gray-300 px-3 ">
                            ${price} USD
                        </td>
                        <td class="border border-gray-300 px-3 ">
                            ${category}
                        </td>
                        <td class="border border-gray-300 px-3 flex flex-wrap gap-2">
                            ${images.map((image) => `<img src="${image}" alt="${title}" class="w-12 h-12 object-cover rounded" />`).join("")}
                        </td>
                        <td class="border border-gray-300 px-3 ">
                            <button onclick="handleShowDetail(${id})"
                                class="border border-gray-500 bg-gray-100 px-3 py-1 hover:bg-gray-200"
                            >
                                Detail
                            </button>
                        </td>
                    </tr>
                `;
        })
        .join("");
};

const renderPagination = (total, limit, currentPage = 1) => {
    const totalPages = Math.ceil(total / limit);
    const maxVisiblePages = 5;

    let html = "";

    // Nút Prev
    html += `
        <button
            class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            ${currentPage === 1 ? "disabled" : ""}
            data-page="${currentPage - 1}"
        >
            Prev
        </button>
    `;

    // Logic hiển thị số trang
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
        const halfVisible = Math.floor(maxVisiblePages / 2);

        if (currentPage <= halfVisible) {
            // Gần đầu
            endPage = maxVisiblePages;
        } else if (currentPage >= totalPages - halfVisible) {
            // Gần cuối
            startPage = totalPages - maxVisiblePages + 1;
        } else {
            // Ở giữa
            startPage = currentPage - halfVisible;
            endPage = currentPage + halfVisible;
        }
    }

    // Nút trang đầu + dấu ...
    if (startPage > 1) {
        html += `
            <button
                data-page="1"
                class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100"
            >
                1
            </button>
        `;
        if (startPage > 2) {
            html += `<span class="h-9 min-w-9 flex items-center justify-center">...</span>`;
        }
    }

    // Các trang ở giữa
    for (let page = startPage; page <= endPage; page++) {
        html += `
            <button
                data-page="${page}"
                class="
                    h-9 min-w-9 px-3 border rounded
                    ${
                        page === currentPage
                            ? "bg-teal-600 text-white"
                            : "bg-white hover:bg-gray-100"
                    }
                "
            >
                ${page}
            </button>
        `;
    }

    // Dấu ... + nút trang cuối
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="h-9 min-w-9 flex items-center justify-center">...</span>`;
        }
        html += `
            <button
                data-page="${totalPages}"
                class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100"
            >
                ${totalPages}
            </button>
        `;
    }

    // Nút Next
    html += `
        <button
            class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            ${currentPage === totalPages ? "disabled" : ""}
            data-page="${currentPage + 1}"
        >
            Next
        </button>
    `;

    paginationEl.innerHTML = html;
};

const fetchProducts = async (params) => {
    try {
        renderTableSpinner();
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_URL}/search?${query}`);
        const products = await response.json();
        const { total, products: productList } = products;
        const currentPage = Math.floor(params.skip / params.limit) + 1;

        totalCountEl.textContent = total;
        renderProducts(productList);
        renderPagination(total, params.limit, currentPage);
    } catch (error) {
        console.error("Error fetching products:", error);
        productListTbl.innerHTML = `
            <tr>
                <td colspan="5" class="border border-gray-300 px-3 py-3 text-center text-red-600">
                    Không thể tải danh sách sản phẩm. Vui lòng thử lại.
                </td>
            </tr>
        `;
    }
};

const handleShowDetail = async (productId) => {
    try {
        const response = await fetch(`${API_URL}/${productId}`);
        const product = await response.json();

        const {
            title,
            description,
            price,
            category,
            discountPercentage,
            rating,
            sku,
            stock,
            brand,
            thumbnail,
            images,
            tags,
            dimensions,
            weight,
            warrantyInformation,
            shippingInformation,
            availabilityStatus,
            reviews,
            returnPolicy,
            minimumOrderQuantity,
        } = product;

        // Load hình ảnh
        const imageGalleryHTML = images
            .map(
                (img) => `
            <img 
                src="${img}" 
                alt="${title}" 
                class="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity border-2 border-transparent hover:border-teal-500"
                onclick="document.getElementById('modalThumbnail').src='${img}'"
            />
        `,
            )
            .join("");

        // tạo HTML cho tags
        const tagsHTML = tags
            .map(
                (tag) => `
            <span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                ${tag}
            </span>
        `,
            )
            .join("");

        // tạo HTML cho reviews
        const reviewsHTML = reviews
            .map(
                (review) => `
            <div class="bg-white border border-gray-200 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                    <span class="font-semibold text-gray-800">${review.reviewerName}</span>
                    <span class="text-yellow-500 text-lg">
                        ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
                    </span>
                </div>
                <p class="text-gray-700 mb-2">${review.comment}</p>
                <span class="text-sm text-gray-500">
                    ${new Date(review.date).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </span>
            </div>
        `,
            )
            .join("");

        // tạo HTML cho đánh giá sao
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        const starsHTML =
            "★".repeat(fullStars) +
            (hasHalfStar ? "⯨" : "") +
            "☆".repeat(emptyStars);

        productModal.innerHTML = `
        <div
            class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
            <!-- Modal Header -->
            <div
                class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10"
            >
                <h2 class="text-2xl font-bold text-gray-800">${title}</h2>
                <button
                    id="closeModal"
                    class="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-6">
                <!-- Product Images -->
                <div class="mb-6">
                    <img
                        id="modalThumbnail"
                        src="${thumbnail}"
                        alt="${title}"
                        class="w-full h-80 object-contain rounded-lg mb-4 bg-gray-50"
                    />
                    <div class="flex gap-2 overflow-x-auto pb-2">
                        ${imageGalleryHTML}
                    </div>
                </div>

                <!-- Product Info Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- Left Column -->
                    <div>
                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Giá</span>
                            <p class="text-3xl font-bold text-teal-600">$${price.toFixed(2)}</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Danh mục</span>
                            <p class="text-lg capitalize font-medium">${category}</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Thương hiệu</span>
                            <p class="text-lg font-medium">${brand || "N/A"}</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Đánh giá</span>
                            <div class="flex items-center gap-2">
                                <span class="text-lg font-semibold">${rating.toFixed(1)}</span>
                                <span class="text-yellow-500 text-xl">${starsHTML}</span>
                            </div>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Tồn kho</span>
                            <p class="text-lg font-medium ${stock < 10 ? "text-red-600" : "text-green-600"}">
                                ${stock} sản phẩm
                            </p>
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div>
                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Giảm giá</span>
                            <p class="text-lg text-red-600 font-semibold">-${discountPercentage.toFixed(1)}%</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">SKU</span>
                            <p class="text-lg font-mono bg-gray-100 px-2 py-1 rounded inline-block">${sku}</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Trạng thái</span>
                            <p class="text-lg font-medium ${
                                availabilityStatus === "In Stock"
                                    ? "text-green-600"
                                    : availabilityStatus === "Low Stock"
                                      ? "text-orange-600"
                                      : "text-red-600"
                            }">${availabilityStatus}</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Bảo hành</span>
                            <p class="text-lg">${warrantyInformation}</p>
                        </div>

                        <div class="mb-4">
                            <span class="text-sm text-gray-500 block mb-1">Vận chuyển</span>
                            <p class="text-lg">${shippingInformation}</p>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2 text-gray-800">Mô tả sản phẩm</h3>
                    <p class="text-gray-700 leading-relaxed">${description}</p>
                </div>

                <!-- Tags -->
                ${
                    tags && tags.length > 0
                        ? `
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2 text-gray-800">Tags</h3>
                    <div class="flex flex-wrap gap-2">
                        ${tagsHTML}
                    </div>
                </div>
                `
                        : ""
                }

                <!-- Dimensions -->
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2 text-gray-800">Kích thước & Trọng lượng</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="text-sm text-gray-500 block mb-1">Rộng</span>
                            <p class="font-semibold">${dimensions.width} cm</p>
                        </div>
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="text-sm text-gray-500 block mb-1">Cao</span>
                            <p class="font-semibold">${dimensions.height} cm</p>
                        </div>
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="text-sm text-gray-500 block mb-1">Sâu</span>
                            <p class="font-semibold">${dimensions.depth} cm</p>
                        </div>
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="text-sm text-gray-500 block mb-1">Trọng lượng</span>
                            <p class="font-semibold">${weight} kg</p>
                        </div>
                    </div>
                </div>

                <!-- Reviews -->
                ${
                    reviews && reviews.length > 0
                        ? `
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-4 text-gray-800">
                        Đánh giá từ khách hàng (${reviews.length})
                    </h3>
                    <div class="space-y-4">
                        ${reviewsHTML}
                    </div>
                </div>
                `
                        : ""
                }

                <!-- Additional Info -->
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <span class="text-gray-500">Chính sách đổi trả:</span>
                            <span class="font-semibold ml-2">${returnPolicy}</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Số lượng đặt tối thiểu:</span>
                            <span class="font-semibold ml-2">${minimumOrderQuantity}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div
                class="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3"
            >
                <button
                    class="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    ${stock === 0 ? "disabled" : ""}
                >
                    ${stock === 0 ? "Hết hàng" : "Thêm vào giỏ hàng"}
                </button>
                <button
                    class="flex-1 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    ${stock === 0 ? "disabled" : ""}
                >
                    ${stock === 0 ? "Hết hàng" : "Mua ngay"}
                </button>
            </div>
        </div>
        `;

        // show modal
        productModal.classList.remove("hidden");

        // Đóng modal
        const closeModalBtn = document.getElementById("closeModal");

        closeModalBtn.onclick = () => {
            productModal.classList.add("hidden");
        };
    } catch (error) {
        console.error("Error fetching product details:", error);
        alert("Không thể tải thông tin sản phẩm. Vui lòng thử lại.");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Sự kiện click cho các nút trong panigation
    paginationEl.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-page]");
        if (!btn || btn.disabled) return;

        const page = parseInt(btn.dataset.page);
        params.skip = (page - 1) * params.limit;
        fetchProducts(params);
    });

    btnSearch.onclick = () => {
        const titleSearch = titleSearchEl.value;
        const sortMethod = sortMethodEl.value;
        params.q = titleSearch;
        params.skip = 0;

        if (sortMethod && sortConfig[sortMethod]) {
            params.sortBy = sortConfig[sortMethod].sortBy;
            params.order = sortConfig[sortMethod].order;
        } else {
            params.sortBy = "";
            params.order = "";
        }
        fetchProducts(params);
    };

    fetchProducts(params);
});
