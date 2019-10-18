using System.ComponentModel.DataAnnotations;

namespace ServerApp.Models.BindingTargets {

    public class SupplierData {

        [Required]
        public string Name { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        [StringLength(2, MinimumLength = 2)]
        public string State { get; set; }

        public Supplier Supplier => new Supplier {
            Name = Name, City = City, State = State
        };
    }
}
