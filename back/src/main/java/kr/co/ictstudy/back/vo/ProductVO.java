package kr.co.ictstudy.back.vo;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;

/**
 * ProductVO
 */
@Getter
@Setter
public class ProductVO {
    private long id;
    private String name;
    private String context;
    private Double price;
    private Date createdAt;
    private Date updatedAt;
    private Double discount;
    private Double rating;

    public String toString() {
        // ProductVO{id=1, name='윤수영', context='수영입니다', price=1000.0, createdAt=Mon Jul
        // 22 13:07:02 KST 2024, updatedAt=Mon Jul 22 13:07:02 KST 2024, discount=1.0,
        // rating=10.0}
        return "ProductVO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", context='" + context + '\'' +
                ", price=" + price +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", discount=" + discount +
                ", rating=" + rating +
                '}';
    }

}