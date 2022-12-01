(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[18],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(45),l=a(28),r=a(136),i=a(137),o=a(139),s=a(0),c=a.n(s),u=a(138),m=a.n(u),d=(a(59),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).highlight=function(){a.ref&&a.ref.current&&m.a.highlightElement(a.ref.current)},a.ref=c.a.createRef(),a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,a=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(a)},t.trim()))}}]),t}(c.a.Component))},141:function(e,t,a){},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),l=a.n(n),r=a(26),i=a(297),o=a(295),s=a(114),c=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=c();return l.a.createElement("div",{className:e.root},l.a.createElement(o.a,null,l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/infoMD",className:e.line},"IntroMD")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/intro",className:e.line},"Queries")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/mongodbMethods",className:e.line},"mongodbMethods")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/mongoCurd",className:e.line},"MongoCurd-Ref")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/mongoQueries",className:e.line},"Mongo Queries")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/searchErrorHandling",className:e.line},"searchErrorHandling")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/bulkRight",className:e.line},"BulkWright")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/mysql",className:e.line},"Mysql")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/mysqlCurd",className:e.line},"MysqlCurd")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/joinOp",className:e.line},"JoinOp")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/sortOp",className:e.line},"Sort")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/curdOp",className:e.line},"CurdOp")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/gridFs",className:e.line},"gridFs")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/postgressql",className:e.line},"PostgreSql"))),l.a.createElement("div",null))}},176:function(e,t,a){e.exports=a.p+"static/media/mongodb.d2194152.png"},177:function(e,t,a){e.exports=a.p+"static/media/index.f1ca6112.gif"},178:function(e,t,a){e.exports=a.p+"static/media/like.b4f67f76.png"},392:function(e,t,a){"use strict";a.r(t);var n=a(45),l=a(28),r=a(136),i=a(137),o=a(139),s=a(0),c=a.n(s),u=a(138),m=a.n(u),d=a(120),h=a(57),E=a(296),p=a(5),b=(a(141),a(155)),g=a(140),f=a(176),y=a.n(f),v=a(177),w=a.n(v),D=a(178),M=a.n(D),T={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},k={height:350,width:600},x='\n    db.createCollection("student", \n                          { capped : true, \n                            autoIndexID : true, \n                            size : 5242880, \n                            max : 5000\n                           }); \n'.trim(),N=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:2},c.a.createElement(h.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(b.a,null)))),c.a.createElement(d.a,{item:!0,xs:10},c.a.createElement(h.a,{className:e.paper},c.a.createElement(E.a,null,c.a.createElement("h3",null,"1. What makes MongoDB the best?"),c.a.createElement("ul",null,c.a.createElement("li",null,"Document-oriented (DO)"),c.a.createElement("li",null,"High performance (HP)"),c.a.createElement("li",null,"High availability (HA)"),c.a.createElement("li",null,"Easy scalability"),c.a.createElement("li",null,"Rich query language")),c.a.createElement("br",null),c.a.createElement("h3",null,"2.If you remove an object attribute, is it deleted from the database?"),c.a.createElement("p",null,"Yes, it is deleted. Hence, it is better to eliminate the attribute and then save the object again."),c.a.createElement("br",null),c.a.createElement("img",{src:y.a,alt:"Omega",className:"responsive",style:k}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h3",null,"3. Explain the situation when an index does not fit into RAM."),c.a.createElement("p",null,"Indexes do not have to fit entirely into RAM in all cases. If the value of the indexed field increments with every insert, and most queries select recently added documents; then MongoDB only needs to keep the parts of the index that hold the most recent or \u201cright-most\u201d values in RAM. This allows for efficient index use for read and write operations and minimize the amount of RAM required to support the index."),c.a.createElement("img",{src:w.a,alt:"Omega",className:"responsive",style:k}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Likes Comments"),c.a.createElement("br",null),c.a.createElement("img",{src:M.a,alt:"Omega",className:"responsive",style:k}),c.a.createElement("br",null),c.a.createElement("h3",null,"4. How does MongoDB provide consistency?"),c.a.createElement("ul",null,c.a.createElement("li",null,"MongoDB uses the reader\u2013writer locks, allowing simultaneous readers to access any supply like a database or a collection but always offering private access to single writes."),c.a.createElement("br",null),c.a.createElement("li",null,"MongoDB is consistent by default: reads and writes are issued to the primary member of a replica set. Applications can optionally read from secondary replicas, where data is eventually consistent by default."),c.a.createElement("br",null),c.a.createElement("li",null,"Eventual consistency means exactly that: the system is eventually consistent\u2013if no updates are made to a given data item for a \u201clong enough\u201d period of time, sometime after hardware and network failures heal, then, eventually, all reads to that item will return the same consistent value.")),c.a.createElement("br",null),c.a.createElement("h3",null,"5. What is the use of Journaling in MongoDB?"),c.a.createElement("p",null,"Journaling is used for safe backups in MongoDB."),c.a.createElement("br",null),c.a.createElement("h3",null,"6. What is the use of Profiler?"),c.a.createElement("p",null,"Profiler is used to show the performance characteristics of every operation against the database."),c.a.createElement("br",null),c.a.createElement("h3",null,"7. What is Vertical Scaling?"),c.a.createElement("p",null,"Vertical scaling adds more CPU and storage resources to increase capacity."),c.a.createElement("br",null),c.a.createElement("h3",null,"8.Define Horizontal Scaling."),c.a.createElement("p",null,"Horizontal scaling divides the dataset and distributes data over multiple servers, or shards."),c.a.createElement("br",null),c.a.createElement("h3",null,"9. What are the components of the Sharded cluster?"),c.a.createElement("p",null,"The sharded cluster has the following components: "),c.a.createElement("ul",null,c.a.createElement("li",null,"Shards"),c.a.createElement("li",null,"Query routers"),c.a.createElement("li",null,"Config servers")),c.a.createElement("h3",null,"10. What is the use of the pretty() method?"),c.a.createElement("p",null,"The pretty() method is used to show the results in a formatted way."),c.a.createElement("br",null),c.a.createElement("h3",null,"11. What is the use of the dot notation in MongoDB?"),c.a.createElement("p",null,"MongoDB uses the dot notation to access the elements of an array and the fields of an embedded document."),c.a.createElement("br",null),c.a.createElement("h3",null,"12. What is Splitting in MongoDB?"),c.a.createElement("p",null,"Splitting is a background process that is used to keep chunks from growing too large."),c.a.createElement("br",null),c.a.createElement("h3",null,"13. What is the difference between MongoDB(non-relational) and MySQL(relational)?"),c.a.createElement("p",null,"There is a lot of difference between them in:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Terms of data representation"),c.a.createElement("li",null,"Relationships"),c.a.createElement("li",null,"Transaction"),c.a.createElement("li",null,"Querying data"),c.a.createElement("li",null,"Schema design and definition"),c.a.createElement("li",null,"Performance"),c.a.createElement("li",null,"Speed"),c.a.createElement("li",null,"Normalization, and many more.")),c.a.createElement("br",null),c.a.createElement("h3",null,"14. Explain the structure of ObjectID in MongoDB."),c.a.createElement("p",null,"ObjectIds are small, likely unique, fast to generate, and ordered. ObjectId values consist of 12 bytes, where the first four bytes are a timestamp that reflect the ObjectId\u2019s creation."),c.a.createElement("br",null),c.a.createElement("h3",null,"15. Why MongoDB is not preferred over a 32-bit system?"),c.a.createElement("p",null,"When running a 32-bit build of MongoDB, the total storage size for the server, including data and indexes, is 2 gigabytes. For this reason, do not deploy MongoDB to production on 32-bit machines. If you're running a 64-bit build of MongoDB, there's virtually no limit to storage size."),c.a.createElement("br",null),c.a.createElement("h3",null,"16. Does MongoDB support ACID transaction management and locking functionalities?"),c.a.createElement("p",null,"Historically MongoDB does not support default multi-document ACID transactions (multiple-document updates that can be rolled back and are ACID-compliant). However, MongoDB provides atomic operation on a single document."),c.a.createElement("br",null),c.a.createElement("h3",null,"17. Should I normalize my data before storing it in MongoDB?"),c.a.createElement("ul",null,c.a.createElement("li",null,"It depends from your goals. Normalization will provide an update efficient data representation. Denormalization will make data reading efficient."),c.a.createElement("br",null),c.a.createElement("li",null,"In general, use embedded data models (denormalization) when: you have \u201ccontains\u201d relationships between entities. you have one-to-many relationships between entities. In these relationships the \u201cmany\u201d or child documents always appear with or are viewed in the context of the \u201cone\u201d or parent documents."),c.a.createElement("br",null),c.a.createElement("li",null,"In general, use normalized data models: when embedding would result in duplication of data but would not provide sufficient read performance advantages to outweigh the implications of the duplication. to represent more complex many-to-many relationships. to model large hierarchical data sets. Also normalizing your data like you would with a relational database is usually not a good idea in MongoDB."),c.a.createElement("br",null),c.a.createElement("li",null,"Normalization in relational databases is only feasible under the premise that JOINs between tables are relatively cheap. The $lookup aggregation operator provides some limited JOIN functionality, but it doesn't work with sharded collections. So joins often need to be emulated by the application through multiple subsequent database queries, which is very slow")),c.a.createElement("br",null),c.a.createElement("h3",null,"18. What happens if an index does not fit into RAM?"),c.a.createElement("p",null,"If the indexes do not fit into RAM, MongoDB reads data from disk which is relatively very much slower than reading from RAM."),c.a.createElement("br",null),c.a.createElement("h3",null,"19. What are Primary and Secondary Replica sets?"),c.a.createElement("p",null,"Primary and master nodes are the nodes that can accept writes. MongoDB's replication is 'single-master:' only one node can accept write operations at a time. Secondary and slave nodes are read-only nodes that replicate from the primary."),c.a.createElement("br",null),c.a.createElement("h3",null,"20. How does MongoDB provide concurrency?"),c.a.createElement("p",null,"MongoDB uses reader-writer locks that allow concurrent readers shared access to a resource, such as a database or collection, but give exclusive access to a single write operation."),c.a.createElement("br",null),c.a.createElement("h3",null,"21.mongoDB_data_types"),c.a.createElement("p",null,"MongoDB supports many datatypes.Some of them are:"),c.a.createElement("ul",null,c.a.createElement("li",null,"String- String in MongoDB must be UTF - 8 valid."),c.a.createElement("br",null),c.a.createElement("li",null,"Integer- Integer can be 32 bit or 64 bit depending upon your server."),c.a.createElement("br",null),c.a.createElement("li",null,"Boolean Double- This type is used to store floating point values."),c.a.createElement("br",null),c.a.createElement("li",null,"Min/Max keys- This type is used to compare a value against the lowest and highest BSON elements."),c.a.createElement("br",null),c.a.createElement("li",null,"Arrays- This type is used to store arrays or list or multiple values into one key."),c.a.createElement("br",null),c.a.createElement("li",null,"Timestamp- This can be handy for recording when a document has been modified or added."),c.a.createElement("br",null),c.a.createElement("li",null,"Object- This datatype is used for embedded documents."),c.a.createElement("br",null),c.a.createElement("li",null,"Null- This type is used to store a Null value."),c.a.createElement("br",null),c.a.createElement("li",null,"Symbol- This datatype is used identically to a string; however, it 's generally reserved for languages that use a specific symbol type."),c.a.createElement("br",null),c.a.createElement("li",null,"Date- This datatype is used to store the current date or time in UNIX time format.You can specify your own date time by creating object of Date and passing day, month, year into it."),c.a.createElement("br",null),c.a.createElement("li",null,"Object ID- This datatype is used to store the document's ID. "),c.a.createElement("br",null),c.a.createElement("li",null,"Binary data- This datatype is used to store binary data. "),c.a.createElement("br",null),c.a.createElement("li",null,"Code- This datatype is used to store JavaScript code into the document. "),c.a.createElement("br",null),c.a.createElement("li",null,"Regular expression- This datatype is used to store regular expression.")),c.a.createElement("br",null),c.a.createElement("h3",null,"22.Advantages of MongoDB over RDBMS:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Schema less \u2212 MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another."),c.a.createElement("br",null),c.a.createElement("li",null,"Structure of a single object is clear. "),c.a.createElement("br",null),c.a.createElement("li",null,"No complex joins."),c.a.createElement("br",null),c.a.createElement("li",null,"Ease of scale-out \u2212 MongoDB is easy to scale."),c.a.createElement("br",null),c.a.createElement("li",null,"Conversion/mapping of application objects to database objects not needed.")),c.a.createElement("br",null),c.a.createElement("h3",null,"23.Why Use MongoDB?"),c.a.createElement("ul",null,c.a.createElement("li",null,"Document Oriented Storage \u2212 Data is stored in the form of JSON style documents."),c.a.createElement("br",null),c.a.createElement("li",null,"Index on any attribute Replication and high availability Auto-Sharding Rich queries Fast in-place updates."),c.a.createElement("br",null),c.a.createElement("li",null,"Big Data Content Management and Delivery Mobile and Social Infrastructure User Data Management Data Hub.")),c.a.createElement("br",null),c.a.createElement("h3",null,"24.Difference between DELETE, DROP and TRUNCATE:"),c.a.createElement("p",null,"TRUNCATE"),c.a.createElement("ul",null,c.a.createElement("li",null,"TRUNCATE SQL query removes all rows from a table, without logging the individual row deletions."),c.a.createElement("br",null),c.a.createElement("li",null,"TRUNCATE is faster than the DELETE query."),c.a.createElement("br",null),c.a.createElement("li",null,"TRUNCATE is executed using a table lock and the whole table is locked to remove all records."),c.a.createElement("br",null),c.a.createElement("li",null,"TRUNCATE removes all rows from a table. Minimal logging in the transaction log, so it is faster performance-wise."),c.a.createElement("br",null),c.a.createElement("li",null,"Truncate uses less transaction space than the Delete statement."),c.a.createElement("br",null),c.a.createElement("li",null,"Truncate cannot be used with indexed views.")),c.a.createElement("br",null),c.a.createElement("p",null,"DELETE:"),c.a.createElement("ul",null,c.a.createElement("li",null,"DELETE is executed using a row lock, each row in the table is locked for deletion. The DELETE command is used to remove rows from a table based on WHERE condition. The delete can be used with indexed views. Delete uses more transaction space than the Truncate statement.")),c.a.createElement("br",null),c.a.createElement("p",null,"DROP:"),c.a.createElement("ul",null,c.a.createElement("li",null,"The DROP command removes a table from the database. All the tables' rows, indexes, and privileges will also be removed."),c.a.createElement("br",null),c.a.createElement("li",null,"No DML triggers will be fired."),c.a.createElement("br",null),c.a.createElement("li",null,"The operation cannot be rolled back."),c.a.createElement("br",null),c.a.createElement("li",null,"DROP and TRUNCATE are DDL commands, whereas DELETE is a DML command."),c.a.createElement("br",null),c.a.createElement("li",null,"DELETE operations can be rolled back (undone), while DROP and TRUNCATE operations cannot be rolled"),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("h3",null,"25.Replication"),c.a.createElement("p",null,"Replication is the process of synchronizing data across multiple servers. Replication provides redundancy and increases data availability with multiple copies of data on different database servers. Replication protects a database from the loss of a single server. Replication also allows you to recover from hardware failure and service interruptions."),c.a.createElement("b",null,"Why Replication?"),c.a.createElement("br",null),c.a.createElement("p",null,"To keep your data safe High (24*7) availability of data Disaster recovery No downtime for maintenance (like backups, index rebuilds, compaction) Read scaling Replica set is transparent to the application."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"How Replication Works in MongoDB : "),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,"MongoDB achieves replication by the use of replica set. A replica set is a group of mongod instances that host the same data set. In a replica, one node is primary node that receives all write operations. All other instances, such as secondaries, apply operations from the primary so that they have the same data set. Replica set can have only one primary node. Replica set is a group of two or more nodes (generally minimum 3 nodes are required)."),c.a.createElement("br",null),c.a.createElement("li",null,"In a replica set, one node is primary node and remaining nodes are secondary. At the time of automatic failover or maintenance, election establishes for primary and a new primary node is elected. After the recovery of failed node, it again join the replica set and works as a secondary node."),c.a.createElement("br",null),c.a.createElement("b",null,"Replica Set Features : "),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,"A cluster of N nodes "),c.a.createElement("li",null,"Any one node can be primary"),c.a.createElement("li",null,"All write operations go to primary"),c.a.createElement("li",null,"Automatic failover "),c.a.createElement("li",null,"Automatic recovery")),c.a.createElement("br",null),c.a.createElement("b",null,"Consensus election of primary Set Up a Replica Set :"),c.a.createElement("p",null,"Sharding: Sharding is the process of storing data records across multiple machines and it is MongoDB's approach to meeting the demands of data growth. As the size of the data increases, a single machine may not be sufficient to store the data nor provide an acceptable read and write throughput."),c.a.createElement("p",null,"Sharding solves the problem with horizontal scaling. With sharding, you add more machines to support data growth and the demands of read and write operations."),c.a.createElement("b",null,"Why Sharding?"),c.a.createElement("ul",null,c.a.createElement("li",null,"In replication, all writes go to master node"),c.a.createElement("li",null,"Latency sensitive queries still go to master"),c.a.createElement("li",null,"Single replica set has limitation of 12 nodes"),c.a.createElement("li",null,"Memory can't be large enough when active dataset is big"),c.a.createElement("li",null,"Local disk is not big enough"),c.a.createElement("li",null,"Vertical scaling is too expensive")),c.a.createElement("br",null)),c.a.createElement("h3",null,"26.Projection"),c.a.createElement("p",null,"Projection means selecting only the necessary data rather than selecting whole of the data of a document."),c.a.createElement("br",null),c.a.createElement("p",null,"If a document has 5 fields and you need to show only 3, then select only 3 fields from them. when you execute find() method, then it displays all fields of a document. To limit this, you need to set a list of fields with value 1 or 0. 1 is used to show the field while 0 is used to hide the fields."),c.a.createElement("br",null),c.a.createElement("h3",null,"27. Creating a Capped Collection"),c.a.createElement("ul",null,c.a.createElement("li",null,"Capped collections are fixed-size circular collections that follow the insertion order to support high performance for create, read, and delete operations."),c.a.createElement("li",null,"By circular, it means that when the fixed size allocated to the collection is exhausted, it will start deleting the oldest document in the collection without providing any explicit commands. Capped collections restrict updates to the documents if the update results in increased document size. Since capped collections store documents in the order of the disk storage, it ensures that the document size does not increase the size allocated on the disk. Capped collections are best for storing log information, cache data, or any other high volume data. ")),c.a.createElement("br",null),c.a.createElement("div",{style:T},c.a.createElement(g.a,{code:x,language:"js",plugins:["line-numbers"]})),c.a.createElement("i",null,"This will create a collection named student, with maximum size of 5 megabytes and maximum of 5000 documents.")))))}}]),t}(s.Component);t.default=Object(p.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(N)}}]);
//# sourceMappingURL=18.369fcbb7.chunk.js.map