# ZooManagement
Forder trên là em code cho ZooManagement app
- Folder gồm các file:
    + enclosure.ts: chứa thông tin các chuồng trong Zoo
      enclosure có các phương thức get, set dùng để lấy và thay đổi gía trị, display dùng để thay đổi thông tin
      Validate: dùng để kiểm tra kiểu dữ liệu của Enclousre khi khởi tạo
      ValidateEnclosure: dùng để kiểm tra xem animal ở class Animal có ở đúng chuồng chưa(chuồng đó có ở trong Zoo không),
    + animals.ts: chứa class Animal. Class này được implements từ một lớp IAnimal
      animal chỉ có các phương thức get,set dùng để lấy và thay đổi gía trị, display dùng để hiển thị thông tin của Animal
      Validate: dùng để kiểm tra kiểu dữ liệu của Animal khi khởi tạo
      displayInfoAnimal: dùng để hiển thị thông tin của animal
    + food.ts: file dùng để chứa các loại đồ ăn trong Zoo
      Food có các phương thức get, set dùng để lấy và thay đổi gía trị, display dùng để thay đổi thông tin
      
