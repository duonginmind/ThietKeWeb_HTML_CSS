### các thẻ FORM trong HTML
- form

```
    <form action="" method="">
    <!-- các thẻ trong item của form>
    </form>
```

### các thẻ item trong form
* input
    Có các type sau
    - text: cho phép nhận dữ liệu là text
    - password: nhận dl là mk
    - number: chỉ nhận dl số
    - radio: cho phép tạo những lựa chọn trên form (chỉ được phép chọn 1 trong nhiều lựa chọn còn lại) selected
    - checkbox: cho phép tạo ra lựa chọn và có thể chọn nhiều
    - date: tạo ra ngày tháng năm
    - email: chỉ nhận dl có định dạng là email, nhập sai báo lỗi
    - file: cho phép chọn file dưới mtinh của bạn

* thuộc tính của thẻ input:
    - id
    - class
    - name
    - value
    - size: đơn vị là số, qui định chiều dài của input
    - placeholder: dunngf mô tả cho input đó

* label
    giúp mô tả thông tin cho một input

* button
    có các type sau
        - submit: gửi thông tin lên server để xử 
        - reset: xoá hết thông tin đã nhập trên form

* select
    <select>
        <option value=""> label name</option>
    </select>

* textarea
    <textarea rows="gtri số" cols="gtri số"></textarea>

* fieldset
    - tạo ra bộ khung cho form
    - bên trong thường sử dụng thêm thẻ legend 
