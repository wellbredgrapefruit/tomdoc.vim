// Public: This is a test file for verifying TomDoc syntax.
// There obviously isn't any actual code here, just some fake stuff.
// Public: Get/Set stuff.
// Public: Get stuff.
// Public: This is a Public method.
//
// arg1 - some argument, who cares
// arg2 - this is a very particular kind of argument
// fritters - they are delicious
//
// Examples
//
//   public_method("a","b","yum")
//
//   public_method("just","a","second example")
//
// Returns something fantastic.
// This is a normal comment that shouldn't be affected by the styling.
// ...
// Internal: This is an Internal method. It has a really long description, one
// that actually wraps around. It's that important, guys.
//
// arg1 - This is actually a hash that takes a lot of options, like:
//        :color  - The String color to restrict by (optional).
//        :weight - The Float weight to restrict by. The weight should
//                  be specified in grams (optional).
// &block - the block that stuff happens to.
//
// Examples
//
//   internal_method { :color => "red", :weight => 180 } do |good|
//     ...
//   end
//
// Returns ABSOLUTELY NOTHING
// Deprecated: This method is kaputski (i.e. Deprecated) in the next release. Just so everyone
// knows.
