var dbPass = "mysql"
var clusterName = "devCluster"

try {
  print('[INFO] Cluster is rebooting...\n');
  shell.connect('root@mysql-server-1:3306', "mysql")
  var cluster = dba.rebootClusterFromCompleteOutage("devCluster", {rejoinInstances: ["mysql-server-2:3306","mysql-server-3:3306"]});
} catch(e) {
  print('\nThe InnoDB cluster could not be reboot.\n\nError: ' + e.message + '\n');
}

try {
  print('Setting up InnoDB cluster...\n');
  shell.connect('root@mysql-server-1:3306', dbPass)
  //var cluster = dba.rebootClusterFromCompleteOutage("devCluster", {rejoinInstances: ["mysql-server-2:3306","mysql-server-3:3306"]});
  var cluster = dba.createCluster(clusterName);
  print('Adding instances to the cluster.');
  cluster.addInstance({user: "root", host: "mysql-server-2", password: dbPass})
  print('.');
  cluster.addInstance({user: "root", host: "mysql-server-3", password: dbPass})
  print('.\nInstances successfully added to the cluster.');
  print('\nInnoDB cluster deployed successfully.\n');
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}
